---
title: "typeObject"
description: "Documentation for typeObject."
slug: "matchers/typeObject"
---

# `typeObject`

Matcher for an object value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, typeObject } from "@kensio/smartass";

const value: unknown = {
  metadata: { source: "api" },
};

assertObjectMatches(value, {
  metadata: typeObject(),
});

// value is now narrowed to an object with an object metadata property
// {
//   metadata: object;
// }
```

## Source

Source file: [`src/assert/type-object/type-object.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-object/type-object.match.ts)
