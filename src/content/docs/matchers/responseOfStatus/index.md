---
title: "responseOfStatus"
description: "Documentation for responseOfStatus."
slug: "matchers/responseOfStatus"
---

Matcher for a Response with a specific HTTP status code.

Matchers are applied through assertObjectMatches, where they narrow the corresponding property type.

Type information that already exists in the calling scope is incorporated.

## Usage

```ts
import { assertObjectMatches, responseOfStatus } from "@kensio/smartass";

const value: unknown = {
  response: await fetch("https://example.com"),
};

assertObjectMatches(value, {
  response: responseOfStatus(200),
});

// value is now narrowed to an object with a Response whose status is 200.
// {
//   response: Response & { readonly status: 200 };
// }
```

## Source

Source file: [`src/assert/response-status/response-status.match.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/response-status/response-status.match.ts)
