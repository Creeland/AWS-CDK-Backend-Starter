import * as cdk from '@aws-cdk/core';
import { Backend } from "./backend"

export class BoilerplateStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const backend = new Backend(this, "Backend");

    // 7 TODO: Create an API gateway for your backend's lambda function

    // 8 TODO: Deploy your frontend with SPADeploy
  }
}
