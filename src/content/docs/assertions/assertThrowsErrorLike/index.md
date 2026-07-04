---
title: "assertThrowsErrorLike"
description: "Documentation for assertThrowsErrorLike."
slug: "assertions/assertThrowsErrorLike"
---

Assertion function that verifies a given function throws something that appears to be an error.

Returns the thrown error-like object for further assertions.

Note this function does not apply type-narrowing via an assertion signature.

Use assertInstanceOf on the returned error-like object to narrow its type.

Use assertThrowsErrorLike for cross-realm errors, such as values thrown from Node vm contexts, iframes, workers, or other environments where instanceof Error may fail.

Use assertThrowsError when you expect a real Error instance from the current JavaScript realm.

## Usage

```ts
import { assertThrowsErrorLike } from "@kensio/smartass";

const error = assertThrowsErrorLike(() => parseJson("bad"), {
  name: "SyntaxError",
});

// error is returned as ErrorLike; this assertion does not narrow another value.
```

## Source

Source file: [`src/assert/throws-error-like/throws-error-like.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/throws-error-like/throws-error-like.assert.ts)
