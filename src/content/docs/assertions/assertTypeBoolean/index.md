---
title: "assertTypeBoolean"
description: "Documentation for assertTypeBoolean."
slug: "assertions/assertTypeBoolean"
---

Assert that a value is of type boolean, with type-narrowing.

## Usage

```ts
import { assertTypeBoolean } from "@kensio/smartass";

const value: unknown = true;

assertTypeBoolean(value);

// value is now narrowed to boolean
```

## Source

Source file: [`src/assert/type-boolean/type-boolean.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-boolean/type-boolean.assert.ts)
