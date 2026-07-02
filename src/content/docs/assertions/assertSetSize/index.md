---
title: "assertSetSize"
description: "Documentation for assertSetSize."
slug: "assertions/assertSetSize"
---

# `assertSetSize`

Assert that a Set has exactly the expected size, with type narrowing.

## Usage

```ts
import { assertSetSize } from "@kensio/smartass";

const value: unknown = new Set(["admin"]);

assertSetSize(value, 1);

// value is now narrowed to a Set with exactly 1 element
```

## Source

Source file: [`src/assert/set-size/set-size.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/set-size/set-size.assert.ts)
