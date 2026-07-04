---
title: "assertTypeSymbol"
description: "Documentation for assertTypeSymbol."
slug: "assertions/assertTypeSymbol"
---

Assert that a value is of type symbol, with type-narrowing.

## Usage

```ts
import { assertTypeSymbol } from "@kensio/smartass";

const value: unknown = Symbol("id");

assertTypeSymbol(value);

// value is now narrowed to symbol
```

## Source

Source file: [`src/assert/type-symbol/type-symbol.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-symbol/type-symbol.assert.ts)
