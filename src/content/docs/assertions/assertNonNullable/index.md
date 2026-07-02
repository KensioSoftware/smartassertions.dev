---
title: "assertNonNullable"
description: "Documentation for assertNonNullable."
slug: "assertions/assertNonNullable"
---

# `assertNonNullable`

Assert that a value is non-nullable, with type-narrowing.

## Usage

```ts
import { assertNonNullable } from "@kensio/smartass";

const user: { name: string } | undefined = { name: "Ada" };

assertNonNullable(user);

// user is now narrowed to { name: string }
```

## Source

Source file: [`src/assert/non-nullable/non-nullable.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/non-nullable/non-nullable.assert.ts)
