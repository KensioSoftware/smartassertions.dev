---
title: "typeNumber"
description: "Documentation for typeNumber."
slug: "matchers/typeNumber"
---

# `typeNumber`

Matcher for a number value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, typeNumber } from "@kensio/smartass";

const value: unknown = {
  count: 42,
};

assertObjectMatches(value, {
  count: typeNumber(),
});

// value is now narrowed to an object with a numeric count
// {
//   count: number;
// }
```

## Source

Source file: [`src/assert/type-number/type-number.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-number/type-number.match.ts)
