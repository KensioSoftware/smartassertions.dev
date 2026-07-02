---
title: "bufferEqualTo"
description: "Documentation for bufferEqualTo."
slug: "matchers/bufferEqualTo"
---

# `bufferEqualTo`

Matcher for a TypedArray equal to an expected TypedArray, comparing byte by byte.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, bufferEqualTo } from "@kensio/smartass";

const expected = new Uint8Array([0x01, 0x02, 0x03]);

const value: unknown = {
  data: new Uint8Array([0x01, 0x02, 0x03]),
};

assertObjectMatches(value, {
  data: bufferEqualTo(expected),
});

// value is now narrowed to an object with data equal to the expected buffer
// {
//   data: Uint8Array;
// }
```

## Source

Source file: [`src/assert/buffer-equal/buffer-equal.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/buffer-equal/buffer-equal.match.ts)
