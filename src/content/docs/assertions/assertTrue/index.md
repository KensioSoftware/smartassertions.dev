---
title: "assertTrue"
description: "Documentation for assertTrue."
slug: "assertions/assertTrue"
---

Assert that a value is strictly true (not just truthy), with type-narrowing to the literal type `true`.

## Usage

```ts
import { assertTrue } from "@kensio/smartass";

const isEnabled: unknown = true;

assertTrue(isEnabled);

// isEnabled is now narrowed to true
```

## Source

Source file: [`src/assert/true/true.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/true/true.assert.ts)
