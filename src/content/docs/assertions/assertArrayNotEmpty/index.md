---
title: "assertArrayNotEmpty"
description: "Documentation for assertArrayNotEmpty."
slug: "assertions/assertArrayNotEmpty"
---

Assert that an array has at least one element, with type-narrowing.

## Usage

```ts
import { assertArrayNotEmpty } from "@kensio/smartass";

const value: unknown = ["admin"];

assertArrayNotEmpty(value);

// value is now narrowed to a non-empty array
```

## Source

Source file: [`src/assert/array-not-empty/array-not-empty.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-not-empty/array-not-empty.assert.ts)
