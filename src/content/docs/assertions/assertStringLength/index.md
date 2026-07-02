---
title: "assertStringLength"
description: "Documentation for assertStringLength."
slug: "assertions/assertStringLength"
---

# `assertStringLength`

Assert that a string has exactly the expected length, with type narrowing.

The type narrowing indicates: - An empty string for 0 - An exact length and safe indexing of known character positions up to 10 - For >10, an exact length and safe indexing of known character positions up to 10 when those positions are guaranteed to exist.

Note that this models JavaScript string indexing and length (UTF-16 code units), not Unicode grapheme clusters.

## Usage

```ts
import { assertStringLength } from "@kensio/smartass";

const code: string = "ABC123";

assertStringLength(code, 6);

// code is now narrowed to a string with exactly 6 code units
```

## Source

Source file: [`src/assert/string-length/string-length.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/string-length/string-length.assert.ts)
