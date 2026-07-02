---
title: "assertDirectoryExists"
description: "Documentation for assertDirectoryExists."
slug: "assertions/assertDirectoryExists"
---

# `assertDirectoryExists`

Assert that a filesystem path exists and is a directory.

## Usage

```ts
import { assertDirectoryExists } from "@kensio/smartass";

const directoryPath = "src";

assertDirectoryExists(directoryPath);

// This validates the directory at runtime without changing the path type.
```

## Source

Source file: [`src/assert/directory-exists/directory-exists.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/directory-exists/directory-exists.assert.ts)
