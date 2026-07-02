---
title: "nonEmptyArray"
description: "Documentation for nonEmptyArray."
slug: "matchers/nonEmptyArray"
---

# `nonEmptyArray`

Matcher for a non-empty array.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, nonEmptyArray } from "@kensio/smartass";

const value: unknown = {
  tags: ["typescript", "testing"],
};

assertObjectMatches(value, {
  tags: nonEmptyArray(),
});

// value is now narrowed to an object with a non-empty tags array
// {
//   tags: [unknown, ...unknown[]];
// }
```

## Source

Source file: [`src/assert/array-not-empty/array-not-empty.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-not-empty/array-not-empty.match.ts)
