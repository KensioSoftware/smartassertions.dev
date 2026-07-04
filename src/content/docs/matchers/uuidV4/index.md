---
title: "uuidV4"
description: "Documentation for uuidV4."
slug: "matchers/uuidV4"
---

Matcher for a UUID v4 string value.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, uuidV4 } from "@kensio/smartass";

const value: unknown = {
  id: "123e4567-e89b-42d3-a456-426614174000",
};

assertObjectMatches(value, {
  id: uuidV4(),
});

// value is now narrowed to an object with a UUID v4 id
// {
//   id: UuidV4;
// }
```

## Source

Source file: [`src/assert/uuid/uuid-v4.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/uuid/uuid-v4.match.ts)
