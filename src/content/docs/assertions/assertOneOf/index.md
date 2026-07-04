---
title: "assertOneOf"
description: "Documentation for assertOneOf."
slug: "assertions/assertOneOf"
---

Assert that a value is one of a set of expected values, with type-narrowing.

## Usage

```ts
import { assertOneOf } from "@kensio/smartass";

const status: unknown = "active";

assertOneOf(status, ["pending", "active"] as const);

// status is now narrowed to "pending" | "active"
```

## Source

Source file: [`src/assert/one-of/one-of.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/one-of/one-of.assert.ts)
