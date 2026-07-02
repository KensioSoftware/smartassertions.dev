---
title: "arrayOfMinLength"
description: "Documentation for arrayOfMinLength."
slug: "matchers/arrayOfMinLength"
---

# `arrayOfMinLength`

Matcher for an array with at least the expected minimum length.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { arrayOfMinLength, assertObjectMatches } from "@kensio/smartass";

const value: unknown = {
  items: ["a", "b", "c"],
};

assertObjectMatches(value, {
  items: arrayOfMinLength(2),
});

// value is now narrowed to an object with at least 2 items
// {
//   items: [unknown, unknown, ...unknown[]];
// }
```

## Source

Source file: [`src/assert/array-min-length/array-min-length.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-min-length/array-min-length.match.ts)
