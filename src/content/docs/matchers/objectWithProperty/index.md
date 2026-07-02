---
title: "objectWithProperty"
description: "Documentation for objectWithProperty."
slug: "matchers/objectWithProperty"
---

# `objectWithProperty`

Matcher for an object with a certain named property.

The property only has to exist on the object, but could be undefined.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, objectWithProperty } from "@kensio/smartass";

const value: unknown = {
  metadata: {
    requestId: "abc123",
  },
};

assertObjectMatches(value, {
  metadata: objectWithProperty("requestId"),
});

// value is now narrowed to an object with metadata.requestId present
// {
//   metadata: object & { requestId: unknown };
// }
```

## Source

Source file: [`src/assert/object-has-property/object-has-property.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/object-has-property/object-has-property.match.ts)
