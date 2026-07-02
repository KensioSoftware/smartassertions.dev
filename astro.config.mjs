// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const site = "https://smartassertions.dev";
const socialImage = `${site}/npm-smartass-assertion-functions.png`;

// https://astro.build/config
export default defineConfig({
  site: "https://smartassertions.dev",
  integrations: [
    starlight({
      title: "Smartass assertion functions",
      description:
        "Documentation for Smartass type-narrowing assertion functions.",
      logo: {
        src: "./src/assets/smartass-assertion-functions.png",
        alt: "Smartass assertion functions logo",
        replacesTitle: false,
      },
      favicon: "/favicon.png",
      components: {
        Footer: "./src/components/Footer.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: socialImage,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content: "Smartass assertion functions",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: socialImage,
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image:alt",
            content: "Smartass assertion functions",
          },
        },
      ],
      social: [
        {
          icon: "npm",
          label: "npm",
          href: "https://www.npmjs.com/package/@kensio/smartass",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/KensioSoftware/smartass",
        },
      ],
      sidebar: [
        {
          label: "Start here",
          items: [{ label: "Overview", slug: "" }],
        },
        {
          label: "Assertions",
          items: [
            // assertion-sidebar:start
            {
              label: "assertArrayEquals",
              slug: "assertions/assertArrayEquals",
            },
            {
              label: "assertArrayIncludesAll",
              slug: "assertions/assertArrayIncludesAll",
            },
            {
              label: "assertArrayIncludes",
              slug: "assertions/assertArrayIncludes",
            },
            {
              label: "assertArrayLength",
              slug: "assertions/assertArrayLength",
            },
            {
              label: "assertArrayMinLength",
              slug: "assertions/assertArrayMinLength",
            },
            {
              label: "assertArrayNotEmpty",
              slug: "assertions/assertArrayNotEmpty",
            },
            {
              label: "assertBufferEqual",
              slug: "assertions/assertBufferEqual",
            },
            {
              label: "assertDirectoryExists",
              slug: "assertions/assertDirectoryExists",
            },
            { label: "assertFalse", slug: "assertions/assertFalse" },
            { label: "assertFileEquals", slug: "assertions/assertFileEquals" },
            { label: "assertFileExists", slug: "assertions/assertFileExists" },
            {
              label: "assertFileIncludes",
              slug: "assertions/assertFileIncludes",
            },
            {
              label: "assertFileNotIncludes",
              slug: "assertions/assertFileNotIncludes",
            },
            { label: "assertIdentical", slug: "assertions/assertIdentical" },
            { label: "assertInstanceOf", slug: "assertions/assertInstanceOf" },
            { label: "assertMapSize", slug: "assertions/assertMapSize" },
            {
              label: "assertNonNullable",
              slug: "assertions/assertNonNullable",
            },
            {
              label: "assertNumberBetween",
              slug: "assertions/assertNumberBetween",
            },
            {
              label: "assertNumberToNearest",
              slug: "assertions/assertNumberToNearest",
            },
            {
              label: "assertObjectEquals",
              slug: "assertions/assertObjectEquals",
            },
            {
              label: "assertObjectHasProperty",
              slug: "assertions/assertObjectHasProperty",
            },
            {
              label: "assertObjectMatches",
              slug: "assertions/assertObjectMatches",
            },
            { label: "assertOneOf", slug: "assertions/assertOneOf" },
            { label: "assertPathExists", slug: "assertions/assertPathExists" },
            {
              label: "assertPathNotExists",
              slug: "assertions/assertPathNotExists",
            },
            { label: "assertSetSize", slug: "assertions/assertSetSize" },
            {
              label: "assertStringEndsWith",
              slug: "assertions/assertStringEndsWith",
            },
            {
              label: "assertStringIncludes",
              slug: "assertions/assertStringIncludes",
            },
            {
              label: "assertStringLength",
              slug: "assertions/assertStringLength",
            },
            {
              label: "assertStringNotIncludes",
              slug: "assertions/assertStringNotIncludes",
            },
            {
              label: "assertStringStartsWith",
              slug: "assertions/assertStringStartsWith",
            },
            {
              label: "assertThrowsErrorAsync",
              slug: "assertions/assertThrowsErrorAsync",
            },
            {
              label: "assertThrowsErrorLike",
              slug: "assertions/assertThrowsErrorLike",
            },
            {
              label: "assertThrowsError",
              slug: "assertions/assertThrowsError",
            },
            { label: "assertTrue", slug: "assertions/assertTrue" },
            { label: "assertTypeBigInt", slug: "assertions/assertTypeBigInt" },
            {
              label: "assertTypeBoolean",
              slug: "assertions/assertTypeBoolean",
            },
            {
              label: "assertTypeFunction",
              slug: "assertions/assertTypeFunction",
            },
            { label: "assertTypeNumber", slug: "assertions/assertTypeNumber" },
            {
              label: "assertTypeNumeric",
              slug: "assertions/assertTypeNumeric",
            },
            { label: "assertTypeObject", slug: "assertions/assertTypeObject" },
            { label: "assertTypeString", slug: "assertions/assertTypeString" },
            { label: "assertTypeSymbol", slug: "assertions/assertTypeSymbol" },
            {
              label: "assertTypeTypedArray",
              slug: "assertions/assertTypeTypedArray",
            },
            { label: "assertUndefined", slug: "assertions/assertUndefined" },
            { label: "assertUuidV4", slug: "assertions/assertUuidV4" },
            // assertion-sidebar:end
          ],
        },
        {
          label: "Matchers",
          items: [
            // matcher-sidebar:start
            { label: "arrayIncludingAll", slug: "matchers/arrayIncludingAll" },
            { label: "arrayIncluding", slug: "matchers/arrayIncluding" },
            { label: "arrayOfLength", slug: "matchers/arrayOfLength" },
            { label: "arrayOfMinLength", slug: "matchers/arrayOfMinLength" },
            { label: "nonEmptyArray", slug: "matchers/nonEmptyArray" },
            { label: "bufferEqualTo", slug: "matchers/bufferEqualTo" },
            { label: "instanceOf", slug: "matchers/instanceOf" },
            { label: "mapOfSize", slug: "matchers/mapOfSize" },
            { label: "nonNullable", slug: "matchers/nonNullable" },
            { label: "numberBetween", slug: "matchers/numberBetween" },
            { label: "numberToNearest", slug: "matchers/numberToNearest" },
            {
              label: "objectWithProperty",
              slug: "matchers/objectWithProperty",
            },
            { label: "oneOf", slug: "matchers/oneOf" },
            { label: "setOfSize", slug: "matchers/setOfSize" },
            { label: "stringEndingWith", slug: "matchers/stringEndingWith" },
            { label: "stringIncluding", slug: "matchers/stringIncluding" },
            { label: "stringOfLength", slug: "matchers/stringOfLength" },
            {
              label: "stringNotIncluding",
              slug: "matchers/stringNotIncluding",
            },
            {
              label: "stringStartingWith",
              slug: "matchers/stringStartingWith",
            },
            { label: "typeBigInt", slug: "matchers/typeBigInt" },
            { label: "typeBoolean", slug: "matchers/typeBoolean" },
            { label: "typeFunction", slug: "matchers/typeFunction" },
            { label: "typeNumber", slug: "matchers/typeNumber" },
            { label: "typeNumeric", slug: "matchers/typeNumeric" },
            { label: "typeObject", slug: "matchers/typeObject" },
            { label: "typeString", slug: "matchers/typeString" },
            { label: "typeSymbol", slug: "matchers/typeSymbol" },
            { label: "typeTypedArray", slug: "matchers/typeTypedArray" },
            { label: "uuidV4", slug: "matchers/uuidV4" },
            // matcher-sidebar:end
          ],
        },
        { label: "ESLint", slug: "eslint-config-rules" },
      ],
    }),
  ],
});
