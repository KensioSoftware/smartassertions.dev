---
title: "assertTypeNumber"
description: "Documentation for assertTypeNumber."
slug: "assertions/assertTypeNumber"
---

# `assertTypeNumber`

Assert that a value is of type number, with type-narrowing.

## Usage

```ts
import { assertTypeNumber } from "@kensio/smartass";

const value: unknown = 42;

assertTypeNumber(value);

// value is now narrowed to number
```

## Source

Source file: [`src/assert/type-number/type-number.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-number/type-number.assert.ts)
