---
title: "assertMapSize"
description: "Documentation for assertMapSize."
slug: "assertions/assertMapSize"
---

# `assertMapSize`

Assert that a Map has exactly the expected size, with type narrowing.

## Usage

```ts
import { assertMapSize } from "@kensio/smartass";

const value: unknown = new Map([["role", "admin"]]);

assertMapSize(value, 1);

// value is now narrowed to a Map with exactly 1 entry
```

## Source

Source file: [`src/assert/map-size/map-size.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/map-size/map-size.assert.ts)
