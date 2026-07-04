---
title: "assertTypeNumeric"
description: "Documentation for assertTypeNumeric."
slug: "assertions/assertTypeNumeric"
---

Assert that a value is numeric (number or bigint), with type-narrowing.

## Usage

```ts
import { assertTypeNumeric } from "@kensio/smartass";

const value: unknown = 42;

assertTypeNumeric(value);

// value is now narrowed to number | bigint
```

## Source

Source file: [`src/assert/type-numeric/type-numeric.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-numeric/type-numeric.assert.ts)
