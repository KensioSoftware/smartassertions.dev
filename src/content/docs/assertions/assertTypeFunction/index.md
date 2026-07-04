---
title: "assertTypeFunction"
description: "Documentation for assertTypeFunction."
slug: "assertions/assertTypeFunction"
---

Assert that a value is of type function, with type-narrowing.

## Usage

```ts
import { assertTypeFunction } from "@kensio/smartass";

const callback: unknown = () => "ok";

assertTypeFunction(callback);

// callback is now narrowed to Function
```

## Source

Source file: [`src/assert/type-function/type-function.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-function/type-function.assert.ts)
