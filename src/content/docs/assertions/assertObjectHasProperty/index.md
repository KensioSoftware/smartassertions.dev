---
title: "assertObjectHasProperty"
description: "Documentation for assertObjectHasProperty."
slug: "assertions/assertObjectHasProperty"
---

# `assertObjectHasProperty`

Assert that an object has a certain named property.

The property only has to exist on the object, but could be undefined.

## Usage

```ts
import { assertObjectHasProperty } from "@kensio/smartass";

const user: object = { name: "Ada" };

assertObjectHasProperty(user, "name");

// user is now narrowed to an object with a "name" property
```

## Source

Source file: [`src/assert/object-has-property/object-has-property.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/object-has-property/object-has-property.assert.ts)
