---
title: "assertPathNotExists"
description: "Documentation for assertPathNotExists."
slug: "assertions/assertPathNotExists"
---

Assert that a filesystem path does not exist.

## Usage

```ts
import { assertPathNotExists } from "@kensio/smartass";

const filePath = "missing.txt";

assertPathNotExists(filePath);

// This validates the missing path at runtime without changing the path type.
```

## Source

Source file: [`src/assert/path-not-exists/path-not-exists.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/path-not-exists/path-not-exists.assert.ts)
