---
title: "assertStringEndsWith"
description: "Documentation for assertStringEndsWith."
slug: "assertions/assertStringEndsWith"
---

Assert that a string ends with a given suffix, with type narrowing.

## Usage

```ts
import { assertStringEndsWith } from "@kensio/smartass";

const filename: string = "index.ts";

assertStringEndsWith(filename, ".ts");

// filename is now narrowed to a string ending with ".ts"
```

## Source

Source file: [`src/assert/string-ends-with/string-ends-with.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/string-ends-with/string-ends-with.assert.ts)
