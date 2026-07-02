---
title: "assertArrayMinLength"
description: "Documentation for assertArrayMinLength."
slug: "assertions/assertArrayMinLength"
---

# `assertArrayMinLength`

Assert that an array has at least the expected minimum length, with type narrowing.

The type narrowing indicates: - A non-empty array for 1 - At least N elements up to 5 - At least 5 elements for >5

## Usage

```ts
import { assertArrayMinLength } from "@kensio/smartass";

const value: unknown = ["admin", "editor"];

assertArrayMinLength(value, 2);

// value is now narrowed to an array with at least 2 elements
```

## Source

Source file: [`src/assert/array-min-length/array-min-length.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-min-length/array-min-length.assert.ts)
