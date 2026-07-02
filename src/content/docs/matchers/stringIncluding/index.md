---
title: "stringIncluding"
description: "Documentation for stringIncluding."
slug: "matchers/stringIncluding"
---

# `stringIncluding`

Matcher for a string that includes a given substring.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, stringIncluding } from "@kensio/smartass";

const value: unknown = {
  message: "hello world",
};

assertObjectMatches(value, {
  message: stringIncluding("world"),
});

// value is now narrowed to an object with a message including "world"
// {
//   message: `${string}world${string}`;
// }
```

## Source

Source file: [`src/assert/string-includes/string-includes.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/string-includes/string-includes.match.ts)
