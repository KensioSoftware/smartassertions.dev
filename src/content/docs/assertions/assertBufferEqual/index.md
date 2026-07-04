---
title: "assertBufferEqual"
description: "Documentation for assertBufferEqual."
slug: "assertions/assertBufferEqual"
---

Assert that two buffers (TypedArrays) are equal, comparing element by element.

Supports all TypedArray types: Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array.

## Usage

```ts
import { assertBufferEqual } from "@kensio/smartass";

const value: unknown = Buffer.from("ok");

assertBufferEqual(value, Buffer.from("ok"));

// value is now narrowed to Buffer
```

## Source

Source file: [`src/assert/buffer-equal/buffer-equal.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/buffer-equal/buffer-equal.assert.ts)
