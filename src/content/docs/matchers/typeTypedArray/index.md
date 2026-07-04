---
title: "typeTypedArray"
description: "Documentation for typeTypedArray."
slug: "matchers/typeTypedArray"
---

Matcher for a TypedArray value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, typeTypedArray } from "@kensio/smartass";

const value: unknown = {
  pixels: new Uint8Array([255, 128, 0]),
};

assertObjectMatches(value, {
  pixels: typeTypedArray(),
});

// value is now narrowed to an object with a TypedArray pixels property
// {
//   pixels: TypedArray;
// }
```

## Source

Source file: [`src/assert/type-typed-array/type-typed-array.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-typed-array/type-typed-array.match.ts)
