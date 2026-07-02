#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";
import { SmartAssertionsDevStack } from "../lib/smart-assertions-dev-stack.ts";

const app = new cdk.App();

new SmartAssertionsDevStack(app, "SmartAssertionsDevStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "us-east-1",
  },
});
