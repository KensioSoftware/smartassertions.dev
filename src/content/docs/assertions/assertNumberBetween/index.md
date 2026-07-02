---
title: "assertNumberBetween"
description: "Documentation for assertNumberBetween."
slug: "assertions/assertNumberBetween"
---

# `assertNumberBetween`

Assert that a numeric value is between min and max inclusive, with type-narrowing.

## Usage

```ts
import { assertNumberBetween } from "@kensio/smartass";

const score: unknown = 87;

assertNumberBetween(score, 0, 100);

// score is now narrowed to number | bigint
```

## Source

Source file: [`src/assert/number-between/number-between.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/number-between/number-between.assert.ts)
