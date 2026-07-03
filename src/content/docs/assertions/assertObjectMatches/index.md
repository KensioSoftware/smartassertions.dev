---
title: "assertObjectMatches"
description: "Documentation for assertObjectMatches."
slug: "assertions/assertObjectMatches"
---

# `assertObjectMatches`

Assert that an object matches a partial deep object structure, with type-narrowing.

Plain objects are matched partially and recursively.

Arrays are matched by length and by recursively matching each element in order.

Matcher values are evaluated with their matcher predicate.

Primitive values and non-plain objects are compared using Object.is.

## Usage

```ts
import { assertObjectMatches, oneOf, typeString } from "@kensio/smartass"

const user: unknown = {
  name: "Ada",
  role: "admin",
};

assertObjectMatches(user, {
  name: typeString(),
  role: oneOf(["admin", "editor"] as const),
});

// user is now narrowed to an object with a string name
// and a role of "admin" | "editor"
```

## Source

Source file: [`src/assert/object-matches/object-matches.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/object-matches/object-matches.assert.ts)
