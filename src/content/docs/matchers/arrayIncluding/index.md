---
title: "arrayIncluding"
description: "Documentation for arrayIncluding."
slug: "matchers/arrayIncluding"
---

# `arrayIncluding`

Matcher for an array including a specific single element.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { arrayIncluding, assertObjectMatches } from "@kensio/smartass";

const value: unknown = {
  roles: ["admin", "editor"],
};

assertObjectMatches(value, {
  roles: arrayIncluding("admin"),
});

// value is now narrowed to an object with roles including "admin"
// {
//   roles: ["admin", ...unknown[]];
// }
```

## Source

Source file: [`src/assert/array-includes/array-includes.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-includes/array-includes.match.ts)
