---
title: "assertNumberToNearest"
description: "Documentation for assertNumberToNearest."
slug: "assertions/assertNumberToNearest"
---

Assert that a numeric value, when rounded to the nearest given increment, equals the expected value.

## Usage

```ts
import { assertNumberToNearest } from "@kensio/smartass";

const total: unknown = 9.995;

assertNumberToNearest(total, 10, 0.01);

// total is now narrowed to number
```

## Source

Source file: [`src/assert/number-to-nearest/number-to-nearest.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/number-to-nearest/number-to-nearest.assert.ts)
