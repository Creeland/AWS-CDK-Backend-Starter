import * as cdk from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as lambda from "@aws-cdk/aws-lambda";

export class Backend extends cdk.Construct {
  public readonly handler: lambda.Function;

  constructor(scope: cdk.App, id: string) {
    super(scope, id);
    // 1 TODO: Create a reference to dynamodb!

    // 4 TODO: Connect your lambda function to a this.handler method

    // 5 TODO: Grant read / write data permissions to the table
  } 
}
