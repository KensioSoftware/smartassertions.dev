---
title: "assertResponseStatus"
description: "Documentation for assertResponseStatus."
slug: "assertions/assertResponseStatus"
---

Assert that a Response has a specific HTTP status code, with type narrowing.

Optionally use describeResponse() for the third argument to get more detailed diagnostic information if the assertion fails.

## Usage

```ts
import { assertResponseStatus } from "@kensio/smartass";

const response = await fetch("https://example.com");

assertResponseStatus(response, 200);

// response.status is now narrowed to 200
```

```ts
import { assertResponseStatus, describeResponse } from "@kensio/smartass";

const res = await fetch("https://example.com");

assertResponseStatus(res, 200, await describeResponse(res));
```

## Source

Source file: [`src/assert/response-status/response-status.assert.ts`](https://github.com/KensioSoftware/smartass/blob/main/src/assert/response-status/response-status.assert.ts)
