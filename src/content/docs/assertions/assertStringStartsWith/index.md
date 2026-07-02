---
title: "assertStringStartsWith"
description: "Documentation for assertStringStartsWith."
slug: "assertions/assertStringStartsWith"
---

# `assertStringStartsWith`

Assert that a string starts with a given prefix, with type narrowing.

## Usage

```ts
import { assertStringStartsWith } from "@kensio/smartass";

const url: string = "https://example.com";

assertStringStartsWith(url, "https://");

// url is now narrowed to a string starting with "https://"
```

## Source

Source file: [`src/assert/string-starts-with/string-starts-with.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/string-starts-with/string-starts-with.assert.ts)
