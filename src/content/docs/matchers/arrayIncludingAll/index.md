---
title: "arrayIncludingAll"
description: "Documentation for arrayIncludingAll."
slug: "matchers/arrayIncludingAll"
---

Matcher for an array including all specified elements.

Elements can appear in any order and do not need to be contiguous.

Repeated required elements must appear at least that many times.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { arrayIncludingAll, assertObjectMatches } from "@kensio/smartass";

const value: unknown = {
  roles: ["admin", "editor", "viewer"],
};

assertObjectMatches(value, {
  roles: arrayIncludingAll(["admin", "editor"] as const),
});

// value is now narrowed to an object with roles including both values
// {
//   roles: ["admin" | "editor", "admin" | "editor", ...("admin" | "editor")[]];
// }
```

## Source

Source file: [`src/assert/array-includes-all/array-includes-all.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-includes-all/array-includes-all.match.ts)
