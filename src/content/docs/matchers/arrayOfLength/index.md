---
title: "arrayOfLength"
description: "Documentation for arrayOfLength."
slug: "matchers/arrayOfLength"
---

# `arrayOfLength`

Matcher for an array with exactly the expected length.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { arrayOfLength, assertObjectMatches } from "@kensio/smartass";

const value: unknown = {
  coordinates: [1.5, 2.5, 3.5],
};

assertObjectMatches(value, {
  coordinates: arrayOfLength(3),
});

// value is now narrowed to an object with a 3-element array
// {
//   coordinates: [unknown, unknown, unknown];
// }
```

## Source

Source file: [`src/assert/array-length/array-length.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-length/array-length.match.ts)
