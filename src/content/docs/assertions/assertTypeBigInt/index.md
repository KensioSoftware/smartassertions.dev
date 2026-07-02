---
title: "assertTypeBigInt"
description: "Documentation for assertTypeBigInt."
slug: "assertions/assertTypeBigInt"
---

# `assertTypeBigInt`

Asserts that a value is a bigint, with type-narrowing.

## Usage

```ts
import { assertTypeBigInt } from "@kensio/smartass";

const value: unknown = 1n;

assertTypeBigInt(value);

// value is now narrowed to bigint
```

## Source

Source file: [`src/assert/type-bigint/type-bigint.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-bigint/type-bigint.assert.ts)
