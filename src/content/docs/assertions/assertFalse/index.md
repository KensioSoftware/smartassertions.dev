---
title: "assertFalse"
description: "Documentation for assertFalse."
slug: "assertions/assertFalse"
---

# `assertFalse`

Assert that a value is strictly false (not just falsy), with type-narrowing to the literal type `false`.

## Usage

```ts
import { assertFalse } from "@kensio/smartass";

const isEnabled: unknown = false;

assertFalse(isEnabled);

// isEnabled is now narrowed to literal false
```

## Source

Source file: [`src/assert/false/false.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/false/false.assert.ts)
