---
title: "setOfSize"
description: "Documentation for setOfSize."
slug: "matchers/setOfSize"
---

Matcher for a Set with exactly the expected size.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, setOfSize } from "@kensio/smartass";

const value: unknown = {
  permissions: new Set(["read", "write"]),
};

assertObjectMatches(value, {
  permissions: setOfSize(2),
});

// value is now narrowed to an object with a Set of exactly 2 entries
// {
//   permissions: Set<unknown> & { readonly size: 2 };
// }
```

## Source

Source file: [`src/assert/set-size/set-size.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/set-size/set-size.match.ts)
