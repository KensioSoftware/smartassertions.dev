---
title: "assertThrowsError"
description: "Documentation for assertThrowsError."
slug: "assertions/assertThrowsError"
---

# `assertThrowsError`

Assertion function that verifies a given function throws an error.

Returns the thrown error for further assertions.

Note this function does not apply type-narrowing via an assertion signature.

Use assertInstanceOf on the returned error to narrow its type.

Use assertThrowsError when you expect a real Error instance from the current JavaScript realm.

Use assertThrowsErrorLike for cross-realm errors, such as values thrown from Node vm contexts, iframes, workers, or other environments where instanceof Error may fail.

## Usage

```ts
import { assertThrowsError } from "@kensio/smartass";

const error = assertThrowsError(() => parseJson("bad"));

// error is returned as Error; this assertion does not narrow another value.
```

## Source

Source file: [`src/assert/throws-error/throws-error.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/throws-error/throws-error.assert.ts)
