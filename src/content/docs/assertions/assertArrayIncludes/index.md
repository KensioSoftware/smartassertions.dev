---
title: "assertArrayIncludes"
description: "Documentation for assertArrayIncludes."
slug: "assertions/assertArrayIncludes"
---

# `assertArrayIncludes`

Assert that an array includes a specific element, with type narrowing.

Note that this is an identity match, so objects in an array only fulfill the assertion by being a reference to the same object, rather than equivalent in value to another object reference.

Note that this uses the first element of the narrowed array type to indicate that the element is included, even though the element could be anywhere in the array.

## Usage

```ts
import { assertArrayIncludes } from "@kensio/smartass"

const value: unknown = ["admin", "editor"];

assertArrayIncludes(value, "admin");

// value is now narrowed to an array including "admin"
// ["admin", ...unknown[]]
```

## Source

Source file: [`src/assert/array-includes/array-includes.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-includes/array-includes.assert.ts)
