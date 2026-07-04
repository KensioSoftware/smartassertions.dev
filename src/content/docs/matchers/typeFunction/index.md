---
title: "typeFunction"
description: "Documentation for typeFunction."
slug: "matchers/typeFunction"
---

Matcher for a function value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, typeFunction } from "@kensio/smartass";

const value: unknown = {
  callback: () => "done",
};

assertObjectMatches(value, {
  callback: typeFunction(),
});

// value is now narrowed to an object with a function callback
// {
//   callback: Function;
// }
```

## Source

Source file: [`src/assert/type-function/type-function.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-function/type-function.match.ts)
