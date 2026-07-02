---
title: "stringEndingWith"
description: "Documentation for stringEndingWith."
slug: "matchers/stringEndingWith"
---

# `stringEndingWith`

Matcher for a string that ends with a given suffix.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, stringEndingWith } from "@kensio/smartass";

const value: unknown = {
  filename: "report.pdf",
};

assertObjectMatches(value, {
  filename: stringEndingWith(".pdf"),
});

// value is now narrowed to an object with a filename ending in ".pdf"
// {
//   filename: `${string}.pdf`;
// }
```

## Source

Source file: [`src/assert/string-ends-with/string-ends-with.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/string-ends-with/string-ends-with.match.ts)
