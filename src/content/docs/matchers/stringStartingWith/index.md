---
title: "stringStartingWith"
description: "Documentation for stringStartingWith."
slug: "matchers/stringStartingWith"
---

Matcher for a string that starts with a given prefix.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, stringStartingWith } from "@kensio/smartass";

const value: unknown = {
  url: "https://example.com",
};

assertObjectMatches(value, {
  url: stringStartingWith("https://"),
});

// value is now narrowed to an object with a url starting with "https://"
// {
//   url: `https://${string}`;
// }
```

## Source

Source file: [`src/assert/string-starts-with/string-starts-with.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/string-starts-with/string-starts-with.match.ts)
