---
title: "assertInstanceOf"
description: "Documentation for assertInstanceOf."
slug: "assertions/assertInstanceOf"
---

# `assertInstanceOf`

Assertion function that checks if a value is an instance of a given class, with type-narrowing.

## Usage

```ts
import { assertInstanceOf } from "@kensio/smartass";

const error: unknown = new Error("Boom");

assertInstanceOf(error, Error);

// error is now narrowed to Error
```

## Source

Source file: [`src/assert/instance-of/instance-of.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/instance-of/instance-of.assert.ts)
