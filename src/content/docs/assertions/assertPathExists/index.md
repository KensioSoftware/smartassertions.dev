---
title: "assertPathExists"
description: "Documentation for assertPathExists."
slug: "assertions/assertPathExists"
---

# `assertPathExists`

Assert that a filesystem path exists.

## Usage

```ts
import { assertPathExists } from "@kensio/smartass";

const filePath = "README.md";

assertPathExists(filePath);

// This validates the path at runtime without changing the path type.
```

## Source

Source file: [`src/assert/path-exists/path-exists.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/path-exists/path-exists.assert.ts)
