---
title: "assertArrayEquals"
description: "Documentation for assertArrayEquals."
slug: "assertions/assertArrayEquals"
---

# `assertArrayEquals`

Assert that an array exactly equals the expected array, with type narrowing.

## Usage

```ts
import { assertArrayEquals } from "@kensio/smartass";

const value: unknown = ["admin", "editor"];

assertArrayEquals(value, ["admin", "editor"]);

// value is now narrowed to ["admin", "editor"]
```

## Source

Source file: [`src/assert/array-equals/array-equals.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-equals/array-equals.assert.ts)
