---
title: "typeBoolean"
description: "Documentation for typeBoolean."
slug: "matchers/typeBoolean"
---

Matcher for a boolean value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, typeBoolean } from "@kensio/smartass";

const value: unknown = {
  active: true,
};

assertObjectMatches(value, {
  active: typeBoolean(),
});

// value is now narrowed to an object with a boolean active flag
// {
//   active: boolean;
// }
```

## Source

Source file: [`src/assert/type-boolean/type-boolean.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-boolean/type-boolean.match.ts)
