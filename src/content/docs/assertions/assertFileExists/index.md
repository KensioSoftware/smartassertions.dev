---
title: "assertFileExists"
description: "Documentation for assertFileExists."
slug: "assertions/assertFileExists"
---

# `assertFileExists`

Assert that a filesystem path exists and is a file.

## Usage

```ts
import { assertFileExists } from "@kensio/smartass";

const filePath = "README.md";

assertFileExists(filePath);

// This validates the file at runtime without changing the path type.
```

## Source

Source file: [`src/assert/file-exists/file-exists.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/file-exists/file-exists.assert.ts)
