---
title: "oneOf"
description: "Documentation for oneOf."
slug: "matchers/oneOf"
---

Matcher for a value that is one of a set of expected values.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, oneOf } from "@kensio/smartass";

const value: unknown = {
  role: "admin",
};

assertObjectMatches(value, {
  role: oneOf(["admin", "editor"] as const),
});

// value is now narrowed to an object with a known role
// {
//   role: "admin" | "editor";
// }
```

## Source

Source file: [`src/assert/one-of/one-of.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/one-of/one-of.match.ts)
