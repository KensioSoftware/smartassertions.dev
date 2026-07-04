---
title: "assertUuidV4"
description: "Documentation for assertUuidV4."
slug: "assertions/assertUuidV4"
---

Assert that a value is a UUID v4 string, with type-narrowing.

## Usage

```ts
import { assertUuidV4 } from "@kensio/smartass";

const value: string = "d2f6b6c0-5f50-4f5d-9f08-2f98e93b6d8f";

assertUuidV4(value);

// value is now narrowed to a UUID v4 string
```

## Source

Source file: [`src/assert/uuid/uuid-v4.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/uuid/uuid-v4.assert.ts)
