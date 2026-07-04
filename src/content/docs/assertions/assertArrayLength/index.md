---
title: "assertArrayLength"
description: "Documentation for assertArrayLength."
slug: "assertions/assertArrayLength"
---

Assert that an array has exactly the expected length, with type narrowing.

The type narrowing indicates: - An empty array for 0 - An exact number of elements up to 10 - At least 10 elements for >10

## Usage

```ts
import { assertArrayLength } from "@kensio/smartass";

const value: unknown = ["admin", "editor"];

assertArrayLength(value, 2);

// value is now narrowed to an array with exactly 2 elements
```

## Source

Source file: [`src/assert/array-length/array-length.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-length/array-length.assert.ts)
