---
title: "assertFileEquals"
description: "Documentation for assertFileEquals."
slug: "assertions/assertFileEquals"
---

Assert that a file's content exactly equals the expected content.

## Usage

```ts
import { assertFileEquals } from "@kensio/smartass";

const filePath = "actual.txt";

assertFileEquals(filePath, "foo content");

// This validates file contents at runtime without changing the path type.
```

## Source

Source file: [`src/assert/file-equals/file-equals.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/file-equals/file-equals.assert.ts)
