---
title: "instanceOf"
description: "Documentation for instanceOf."
slug: "matchers/instanceOf"
---

Matcher for a value being an instance of a given class.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, instanceOf } from "@kensio/smartass";

const value: unknown = {
  createdAt: new Date("2024-01-01"),
};

assertObjectMatches(value, {
  createdAt: instanceOf(Date),
});

// value is now narrowed to an object with a Date createdAt property
// {
//   createdAt: Date;
// }
```

## Source

Source file: [`src/assert/instance-of/instance-of.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/instance-of/instance-of.match.ts)
