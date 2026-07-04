---
title: "typeSymbol"
description: "Documentation for typeSymbol."
slug: "matchers/typeSymbol"
---

Matcher for a symbol value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, typeSymbol } from "@kensio/smartass";

const value: unknown = {
  key: Symbol("identifier"),
};

assertObjectMatches(value, {
  key: typeSymbol(),
});

// value is now narrowed to an object with a symbol key
// {
//   key: symbol;
// }
```

## Source

Source file: [`src/assert/type-symbol/type-symbol.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-symbol/type-symbol.match.ts)
