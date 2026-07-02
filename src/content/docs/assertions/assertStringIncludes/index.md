---
title: "assertStringIncludes"
description: "Documentation for assertStringIncludes."
slug: "assertions/assertStringIncludes"
---

# `assertStringIncludes`

Assert that a string includes a given substring, with type narrowing.

## Usage

```ts
import { assertStringIncludes } from "@kensio/smartass";

const message: string = "Upload success";

assertStringIncludes(message, "success");

// message is now narrowed to a string including "success"
```

## Source

Source file: [`src/assert/string-includes/string-includes.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/string-includes/string-includes.assert.ts)
