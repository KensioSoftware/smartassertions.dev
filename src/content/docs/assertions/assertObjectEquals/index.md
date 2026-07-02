---
title: "assertObjectEquals"
description: "Documentation for assertObjectEquals."
slug: "assertions/assertObjectEquals"
---

# `assertObjectEquals`

Assert that two objects have the same own keys and deeply equal values, with type narrowing.

Plain objects are compared recursively by value.

Arrays are compared by length and by recursively comparing each element in order.

Primitive values and non-plain objects are compared using Object.is.

## Usage

```ts
import { assertObjectEquals } from "@kensio/smartass";

const user: unknown = { id: 1, name: "Ada" };

assertObjectEquals(user, { id: 1, name: "Ada" } as const);

// user is now narrowed to { readonly id: 1; readonly name: "Ada" }
```

## Source

Source file: [`src/assert/object-equals/object-equals.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/object-equals/object-equals.assert.ts)
