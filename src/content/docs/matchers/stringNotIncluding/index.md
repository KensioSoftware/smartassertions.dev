---
title: "stringNotIncluding"
description: "Documentation for stringNotIncluding."
slug: "matchers/stringNotIncluding"
---

# `stringNotIncluding`

Matcher for a string that does not include a given substring.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, stringNotIncluding } from "@kensio/smartass";

const value: unknown = {
  content: "safe plain text",
};

assertObjectMatches(value, {
  content: stringNotIncluding("<script>"),
});

// value is now narrowed to an object with content not containing "<script>"
// {
//   content: Exclude<string, `${string}<script>${string}`>;
// }
```

## Source

Source file: [`src/assert/string-not-includes/string-not-includes.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/string-not-includes/string-not-includes.match.ts)
