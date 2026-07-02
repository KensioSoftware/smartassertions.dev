---
title: "assertStringNotIncludes"
description: "Documentation for assertStringNotIncludes."
slug: "assertions/assertStringNotIncludes"
---

# `assertStringNotIncludes`

Assert that a string does not include a given substring, with type narrowing.

## Usage

```ts
import { assertStringNotIncludes } from "@kensio/smartass";

const message: string = "Upload success";

assertStringNotIncludes(message, "error");

// message is now narrowed to a string not including "error"
```

## Source

Source file: [`src/assert/string-not-includes/string-not-includes.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/string-not-includes/string-not-includes.assert.ts)
