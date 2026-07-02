---
title: "assertArrayIncludesAll"
description: "Documentation for assertArrayIncludesAll."
slug: "assertions/assertArrayIncludesAll"
---

# `assertArrayIncludesAll`

Assert that an array includes all specified elements, with type narrowing.

Elements can appear in any order and do not need to be contiguous.

Repeated required elements must appear at least that many times.

Note that this uses the first n elements of the narrowed array type to indicate that the elements are included, even though the elements could be anywhere in the array.

## Usage

```ts
import { assertArrayIncludesAll } from "@kensio/smartass";

const roles: string[] = ["admin", "editor", "viewer"];

assertArrayIncludesAll(roles, ["admin", "editor"]);

// roles narrowed to ["admin"|"editor", "admin"|"editor", ...string[]]
```

## Source

Source file: [`src/assert/array-includes-all/array-includes-all.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/array-includes-all/array-includes-all.assert.ts)
