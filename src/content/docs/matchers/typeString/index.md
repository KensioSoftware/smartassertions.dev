---
title: "typeString"
description: "Documentation for typeString."
slug: "matchers/typeString"
---

# `typeString`

Matcher for a string value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, typeString } from "@kensio/smartass";

const value: unknown = {
  name: "Alice",
};

assertObjectMatches(value, {
  name: typeString(),
});

// value is now narrowed to an object with a string name
// {
//   name: string;
// }
```

## Source

Source file: [`src/assert/type-string/type-string.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-string/type-string.match.ts)
