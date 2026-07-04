#!/usr/bin/env -S pnpm tsx

import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

type ReadmeLink = {
  name: string;
  href: string;
};

type Docblock = {
  summary: string;
  examples: string[];
};

type DocsSection = {
  contentName: string;
  routePrefix: string;
  docsRoot: string;
  links: ReadmeLink[];
};

type DocsSectionResult = {
  created: number;
  missingSources: number;
  missingDocblocks: number;
};

const scriptDir = dirname(fileURLToPath(import.meta.url));

const rootDir = resolve(scriptDir, "..", "..");
const smartassRepo =
  process.env.SMARTASS_REPO ?? resolve(rootDir, "../smartass");

const srcDir = join(rootDir, "src");
const docsRoot = join(srcDir, "content/docs");
const assertionsDocsRoot = join(docsRoot, "assertions");
const matchersDocsRoot = join(docsRoot, "matchers");
const homePage = join(docsRoot, "index.mdx");
const astroConfig = join(rootDir, "astro.config.mjs");
const readme = join(smartassRepo, "README.md");

const githubBlobBase =
  process.env.GITHUB_BLOB_BASE ??
  "https://github.com/KensioSoftware/smartass/blob/main";

const readmeAssertionStart = "<!-- assertion-functions:start -->";
const readmeAssertionEnd = "<!-- assertion-functions:end -->";
const readmeMatcherStart = "<!-- matcher-functions:start -->";
const readmeMatcherEnd = "<!-- matcher-functions:end -->";

const homeAssertionStart = "{/* assertion-functions:start */}";
const homeAssertionEnd = "{/* assertion-functions:end */}";
const homeMatcherStart = "{/* matcher-functions:start */}";
const homeMatcherEnd = "{/* matcher-functions:end */}";

const assertionSidebarStart = "// assertion-sidebar:start";
const assertionSidebarEnd = "// assertion-sidebar:end";
const matcherSidebarStart = "// matcher-sidebar:start";
const matcherSidebarEnd = "// matcher-sidebar:end";

async function main(): Promise<void> {
  assertFileExists(
    readme,
    `Could not find smartass README at: ${readme}
Set SMARTASS_REPO=/absolute/path/to/smartass if needed.`,
  );

  assertFileExists(homePage, `Could not find docs homepage at: ${homePage}`);
  assertFileExists(
    astroConfig,
    `Could not find Astro config at: ${astroConfig}`,
  );

  await mkdir(assertionsDocsRoot, { recursive: true });
  await mkdir(matchersDocsRoot, { recursive: true });

  const readmeText = await readFile(readme, "utf8");

  const assertions = extractReadmeLinks(
    readmeText,
    readmeAssertionStart,
    readmeAssertionEnd,
  );
  const matchers = extractReadmeLinks(
    readmeText,
    readmeMatcherStart,
    readmeMatcherEnd,
  );

  if (assertions.length === 0) {
    throw new Error(
      "No assertion functions found in README assertion-functions block.",
    );
  }

  if (matchers.length === 0) {
    throw new Error(
      "No matcher functions found in README matcher-functions block.",
    );
  }

  const assertionResult = await scaffoldDocsSection({
    contentName: "assertion",
    routePrefix: "assertions",
    docsRoot: assertionsDocsRoot,
    links: assertions,
  });

  const matcherResult = await scaffoldDocsSection({
    contentName: "matcher",
    routePrefix: "matchers",
    docsRoot: matchersDocsRoot,
    links: matchers,
  });

  await replaceMarkedBlockInFile(
    homePage,
    homeAssertionStart,
    homeAssertionEnd,
    generateDocsLinks(assertions, "/assertions"),
  );

  await replaceMarkedBlockInFile(
    homePage,
    homeMatcherStart,
    homeMatcherEnd,
    generateDocsLinks(matchers, "/matchers"),
  );

  await replaceMarkedBlockInFile(
    astroConfig,
    assertionSidebarStart,
    assertionSidebarEnd,
    generateSidebarItems(assertions, "assertions"),
  );

  await replaceMarkedBlockInFile(
    astroConfig,
    matcherSidebarStart,
    matcherSidebarEnd,
    generateSidebarItems(matchers, "matchers"),
  );

  console.log();
  console.log("Done.");
  console.log(`Created assertion docs files: ${assertionResult.created}`);
  console.log(`Created matcher docs files: ${matcherResult.created}`);
  console.log(
    `Missing assertion source files: ${assertionResult.missingSources}`,
  );
  console.log(`Missing matcher source files: ${matcherResult.missingSources}`);
  console.log(
    `Missing assertion docblocks: ${assertionResult.missingDocblocks}`,
  );
  console.log(`Missing matcher docblocks: ${matcherResult.missingDocblocks}`);
  console.log(`Updated homepage: ${homePage}`);
  console.log(`Updated sidebar: ${astroConfig}`);
}

async function scaffoldDocsSection({
  contentName,
  routePrefix,
  docsRoot,
  links,
}: DocsSection): Promise<DocsSectionResult> {
  let created = 0;
  let missingSources = 0;
  let missingDocblocks = 0;

  for (const link of links) {
    const outDir = join(docsRoot, link.name);
    const outFile = join(outDir, "index.md");
    const sourceFile = join(smartassRepo, link.href);
    const sourceUrl = `${githubBlobBase}/${link.href}`;
    const slug = `${routePrefix}/${link.name}`;

    await mkdir(outDir, { recursive: true });

    let docblock: Docblock;

    if (existsSync(sourceFile)) {
      const sourceText = await readFile(sourceFile, "utf8");
      docblock = extractDocblock(sourceText, link.name) ?? {
        summary: `<!-- TODO: Add summary documentation for \`${link.name}\`. -->`,
        examples: [],
      };

      if (docblock.summary.startsWith("<!-- TODO:")) {
        missingDocblocks += 1;
      }
    } else {
      docblock = {
        summary: `<!-- TODO: Add summary documentation for \`${link.name}\`. -->`,
        examples: [],
      };
      missingSources += 1;
    }

    const usageSection = generateUsageSection(link.name, docblock.examples);

    await writeFile(
      outFile,
      `---
title: "${link.name}"
description: "Documentation for ${link.name}."
slug: "${slug}"
---

${docblock.summary}

## Usage

${usageSection}

## Source

Source file: [\`${link.href}\`](${sourceUrl})
`,
    );

    console.log(`Created ${contentName} docs file: ${outFile}`);
    created += 1;
  }

  return {
    created,
    missingSources,
    missingDocblocks,
  };
}

function assertFileExists(path: string, message: string): void {
  if (!existsSync(path)) {
    throw new Error(message);
  }
}

function extractReadmeLinks(
  text: string,
  startMarker: string,
  endMarker: string,
): ReadmeLink[] {
  const block = extractMarkedBlock(text, startMarker, endMarker);

  return block
    .split("\n")
    .map((line) => line.match(/^- \[([^\]]+)]\(([^)]+)\)/))
    .filter((match): match is RegExpMatchArray => match !== null)
    .map((match) => ({
      name: match[1],
      href: match[2],
    }));
}

function extractMarkedBlock(
  text: string,
  startMarker: string,
  endMarker: string,
): string {
  const startIndex = text.indexOf(startMarker);

  if (startIndex === -1) {
    throw new Error(`Could not find start marker: ${startMarker}`);
  }

  const contentStartIndex = startIndex + startMarker.length;
  const endIndex = text.indexOf(endMarker, contentStartIndex);

  if (endIndex === -1) {
    throw new Error(`Could not find end marker: ${endMarker}`);
  }

  return text.slice(contentStartIndex, endIndex);
}

function extractDocblock(
  sourceText: string,
  functionName: string,
): Docblock | undefined {
  const escapedFunctionName = escapeRegExp(functionName);
  const pattern = new RegExp(
    String.raw`/\*\*([\s\S]*?)\*/\s*export function ${escapedFunctionName}\b`,
  );

  const match = sourceText.match(pattern);

  if (!match) {
    return undefined;
  }

  const text = match[1]
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, ""))
    .join("\n")
    .trim();

  return parseDocblock(text);
}

function parseDocblock(text: string): Docblock {
  const examples: string[] = [];
  const summaryLines: string[] = [];
  const lines = text.split("\n");

  let currentExample: string[] | undefined;

  for (const line of lines) {
    if (line.trim() === "@example") {
      if (currentExample !== undefined) {
        examples.push(stripMarkdownCodeFence(currentExample.join("\n").trim()));
      }

      currentExample = [];
      continue;
    }

    if (currentExample === undefined) {
      summaryLines.push(line);
    } else {
      currentExample.push(line);
    }
  }

  if (currentExample !== undefined) {
    examples.push(stripMarkdownCodeFence(currentExample.join("\n").trim()));
  }

  return {
    summary: formatDocblockSummary(summaryLines),
    examples,
  };
}

function formatDocblockSummary(lines: string[]): string {
  return lines
    .join("\n")
    .trim()
    .split(/\n{2,}/)
    .map((paragraph) =>
      paragraph
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .join(" "),
    )
    .join("\n\n")
    .replace(/\.\s+(?=\S)/g, ".\n\n")
    .trim();
}

function stripMarkdownCodeFence(text: string): string {
  const match = text.match(/^```(?:\w+)?\n([\s\S]*?)\n```$/);

  return match?.[1].trim() ?? text;
}

function generateUsageSection(
  functionName: string,
  examples: string[],
): string {
  if (examples.length === 0) {
    return `<!-- TODO: Add a realistic usage example for \`${functionName}\`. -->

\`\`\`ts
import { ${functionName} } from "@kensio/smartass";

// Example coming soon.
\`\`\``;
  }

  return examples
    .map(
      (example) => `\`\`\`ts
${example}
\`\`\``,
    )
    .join("\n\n");
}

function generateDocsLinks(links: ReadmeLink[], routePrefix: string): string {
  return `\n${links
    .map((link) => `- [\`${link.name}\`](${routePrefix}/${link.name}/)`)
    .join("\n")}\n`;
}

function generateSidebarItems(
  links: ReadmeLink[],
  routePrefix: string,
): string {
  return `\n${links
    .map(
      (link) =>
        `                { label: "${escapeJsString(link.name)}", slug: "${routePrefix}/${escapeJsString(link.name)}" },`,
    )
    .join("\n")}\n              `;
}

async function replaceMarkedBlockInFile(
  path: string,
  startMarker: string,
  endMarker: string,
  replacement: string,
): Promise<void> {
  const text = await readFile(path, "utf8");
  const updatedText = replaceMarkedBlock(
    text,
    startMarker,
    endMarker,
    replacement,
  );

  await writeFile(path, updatedText);
}

function replaceMarkedBlock(
  text: string,
  startMarker: string,
  endMarker: string,
  replacement: string,
): string {
  const startIndex = text.indexOf(startMarker);

  if (startIndex === -1) {
    throw new Error(`Could not find start marker: ${startMarker}`);
  }

  const contentStartIndex = startIndex + startMarker.length;
  const endIndex = text.indexOf(endMarker, contentStartIndex);

  if (endIndex === -1) {
    throw new Error(`Could not find end marker: ${endMarker}`);
  }

  return `${text.slice(0, contentStartIndex)}${replacement}${text.slice(endIndex)}`;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeJsString(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

await main();
