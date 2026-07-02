---
title: "assertTypeString"
description: "Documentation for assertTypeString."
slug: "assertions/assertTypeString"
---

# `assertTypeString`

Assert that a value is of type string, with type-narrowing.

## Usage

```ts
import { assertTypeString } from "@kensio/smartass";

const value: unknown = "Ada";

assertTypeString(value);

// value is now narrowed to string
```

## Source

Source file: [`src/assert/type-string/type-string.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-string/type-string.assert.ts)
