/// <reference types="aws-sdk" />
const AWS = require("aws-sdk");

// 2 TODO: Add the proper headers to the return object
const createResponse = (
  body: string | AWS.DynamoDB.DocumentClient.ItemList,
  statusCode = 200
) => {
  return {
      statusCode,
      body: JSON.stringify(body, null, 2)
  };
};

// 3 TODO: Methods for interacting with the database go here!

exports.handler = async function (event: AWSLambda.APIGatewayEvent) {
    try {
    
      // 4 TODO: Check for HTTP method and create responses here

    } catch (error) {
        console.log(error);
        return createResponse(error, 500);
    }
};