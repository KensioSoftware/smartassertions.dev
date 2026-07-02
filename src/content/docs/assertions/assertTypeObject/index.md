---
title: "assertTypeObject"
description: "Documentation for assertTypeObject."
slug: "assertions/assertTypeObject"
---

# `assertTypeObject`

Assert that a value is of type object, with type-narrowing.

## Usage

```ts
import { assertTypeObject } from "@kensio/smartass";

const value: unknown = { name: "Ada" };

assertTypeObject(value);

// value is now narrowed to object
```

## Source

Source file: [`src/assert/type-object/type-object.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/type-object/type-object.assert.ts)
