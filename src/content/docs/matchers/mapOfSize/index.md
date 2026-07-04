---
title: "mapOfSize"
description: "Documentation for mapOfSize."
slug: "matchers/mapOfSize"
---

Matcher for a Map with exactly the expected size.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, mapOfSize } from "@kensio/smartass";

const value: unknown = {
  headers: new Map([["content-type", "application/json"]]),
};

assertObjectMatches(value, {
  headers: mapOfSize(1),
});

// value is now narrowed to an object with a Map of exactly 1 entry
// {
//   headers: Map<unknown, unknown> & { readonly size: 1 };
// }
```

## Source

Source file: [`src/assert/map-size/map-size.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/map-size/map-size.match.ts)
