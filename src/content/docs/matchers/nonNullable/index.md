---
title: "nonNullable"
description: "Documentation for nonNullable."
slug: "matchers/nonNullable"
---

# `nonNullable`

Matcher for a non-nullable value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, nonNullable } from "@kensio/smartass";

const value: unknown = {
  userId: "abc123",
};

assertObjectMatches(value, {
  userId: nonNullable(),
});

// value is now narrowed to an object with a non-null, non-undefined userId
// {
//   userId: NonNullable<unknown>;
// }
```

## Source

Source file: [`src/assert/non-nullable/non-nullable.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/non-nullable/non-nullable.match.ts)
