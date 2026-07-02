---
title: "typeBigInt"
description: "Documentation for typeBigInt."
slug: "matchers/typeBigInt"
---

# `typeBigInt`

Matcher for a bigint value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, typeBigInt } from "@kensio/smartass";

const value: unknown = {
  largeId: 9007199254740993n,
};

assertObjectMatches(value, {
  largeId: typeBigInt(),
});

// value is now narrowed to an object with a bigint largeId
// {
//   largeId: bigint;
// }
```

## Source

Source file: [`src/assert/type-bigint/type-bigint.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-bigint/type-bigint.match.ts)
