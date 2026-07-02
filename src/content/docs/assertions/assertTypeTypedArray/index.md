---
title: "assertTypeTypedArray"
description: "Documentation for assertTypeTypedArray."
slug: "assertions/assertTypeTypedArray"
---

# `assertTypeTypedArray`

Assert that a value is a TypedArray, with type-narrowing.

Supports all TypedArray types: Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array.

## Usage

```ts
import { assertTypeTypedArray } from "@kensio/smartass";

const value: unknown = new Uint8Array([1, 2, 3]);

assertTypeTypedArray(value);

// value is now narrowed to a TypedArray
```

## Source

Source file: [`src/assert/type-typed-array/type-typed-array.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-typed-array/type-typed-array.assert.ts)
