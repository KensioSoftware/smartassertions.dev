---
title: "numberToNearest"
description: "Documentation for numberToNearest."
slug: "matchers/numberToNearest"
---

# `numberToNearest`

Matcher for a number that, when rounded to the nearest given increment, equals the expected value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, numberToNearest } from "@kensio/smartass";

const value: unknown = {
  temperature: 98.7,
};

assertObjectMatches(value, {
  temperature: numberToNearest(99, 1),
});

// value is now narrowed to an object with a numeric temperature
// {
//   temperature: number;
// }
```

## Source

Source file: [`src/assert/number-to-nearest/number-to-nearest.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/number-to-nearest/number-to-nearest.match.ts)
