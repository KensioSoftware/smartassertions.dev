---
title: "typeNumeric"
description: "Documentation for typeNumeric."
slug: "matchers/typeNumeric"
---

# `typeNumeric`

Matcher for a numeric value (number or bigint).

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, typeNumeric } from "@kensio/smartass";

const value: unknown = {
  amount: 100n,
};

assertObjectMatches(value, {
  amount: typeNumeric(),
});

// value is now narrowed to an object with a number or bigint amount
// {
//   amount: number | bigint;
// }
```

## Source

Source file: [`src/assert/type-numeric/type-numeric.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-numeric/type-numeric.match.ts)
