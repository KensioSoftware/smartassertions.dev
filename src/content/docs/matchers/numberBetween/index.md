---
title: "numberBetween"
description: "Documentation for numberBetween."
slug: "matchers/numberBetween"
---

Matcher for a numeric value between min and max inclusive.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, numberBetween } from "@kensio/smartass";

const value: unknown = {
  score: 85,
};

assertObjectMatches(value, {
  score: numberBetween(0, 100),
});

// value is now narrowed to an object with a numeric score in range
// {
//   score: number | bigint;
// }
```

## Source

Source file: [`src/assert/number-between/number-between.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/number-between/number-between.match.ts)
