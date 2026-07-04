---
title: "assertUndefined"
description: "Documentation for assertUndefined."
slug: "assertions/assertUndefined"
---

Assert that a value is strictly undefined, with type-narrowing to the `undefined` type.

## Usage

```ts
import { assertUndefined } from "@kensio/smartass";

const value: unknown = undefined;

assertUndefined(value);

// value is now narrowed to undefined
```

## Source

Source file: [`src/assert/undefined/undefined.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/undefined/undefined.assert.ts)
