---
title: "assertIdentical"
description: "Documentation for assertIdentical."
slug: "assertions/assertIdentical"
---

# `assertIdentical`

Assert that a value is strictly identical to an expected value using ===, with type-narrowing.

## Usage

```ts
import { assertIdentical } from "@kensio/smartass";

const status: unknown = "active";

assertIdentical(status, "active");

// status is now narrowed to "active"
```

## Source

Source file: [`src/assert/identical/identical.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/identical/identical.assert.ts)
