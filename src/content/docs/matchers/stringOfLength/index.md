---
title: "stringOfLength"
description: "Documentation for stringOfLength."
slug: "matchers/stringOfLength"
---

# `stringOfLength`

Matcher for a string with exactly the expected length.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, stringOfLength } from "@kensio/smartass";

const value: unknown = {
  id: "user_123",
};

assertObjectMatches(value, {
  id: stringOfLength(8),
});

// value is now narrowed to an object with an 8-character id
// {
//   id: string & { length: 8; 0: string; ...; 7: string };
// }
```

## Source

Source file: [`src/assert/string-length/string-length.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/string-length/string-length.match.ts)
