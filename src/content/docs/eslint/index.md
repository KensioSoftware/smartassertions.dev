---
title: Optional ESLint config
description: "Documentation for Smartass ESLint config rules"
slug: "eslint-config-rules"
---

The `@kensio/smartass` package also exports an optional ESLint flat config that discourages less
specific assertion usage. For example:

```typescript
assertIdentical(foo.length, 2);
// suggested improvement:
assertArrayLength(foo, 2);
```

You can use this in your ESLint config like this:

```typescript
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

import { smartassPreferSpecificAssertions } from "@kensio/smartass/eslint";

export default defineConfig(
  ...tseslint.configs.recommended,
  ...smartassPreferSpecificAssertions,
);
```

Some more examples of the replacements that the ESLint rules will suggest:

- `assertIdentical(value, true)` → `assertTrue(value)`
- `assertIdentical(value, false)` → `assertFalse(value)`
- `assertIdentical(value, undefined)` → `assertUndefined(value)`
- `assertTrue(value != null)` → `assertNonNullable(value)`
- `assertIdentical(typeof value, "string")` → `assertTypeString(value)`
- `assertIdentical(value instanceof MyClass, true)` → `assertInstanceOf(value, MyClass)`
- `assertIdentical("key" in object, true)` → `assertObjectHasProperty(object, "key")`
- `assertIdentical(value.length, expected)` → `assertArrayLength()` etc.
- `assertIdentical(value.size, expected)` → `assertSetSize()` etc.
- `assertTrue(array.length > 0)` → `assertArrayNotEmpty(array)`
- `assertTrue(value.includes(expected))` → `assertStringIncludes()` etc.
- `assertTrue(value.startsWith(prefix))` → `assertStringStartsWith(value, prefix)`
- `assertTrue(value.endsWith(suffix))` → `assertStringEndsWith(value, suffix)`
- `assertTrue(stats.isDirectory())` → `assertDirectoryExists()` etc.
