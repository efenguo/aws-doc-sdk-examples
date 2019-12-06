var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-southeast-2'});
// Set credentials
var credentials = new AWS.SharedIniFileCredentials({profile: 'bcl-dax-sandbox'});
AWS.config.credentials = credentials;
// Create the DynamoDB service object
(async() => {
  const accountId = 'account:8f783cbe-5856-4c61-b815-d1e8da463cc0'
  const transactionId = 'externalTransactionId:0f057f39-5f74-41d8-ae6c-5efeee8c406a'
  const params = {
    TableName: 'dax-feng-DaxDataTable-1SZJT6LE8NHFT',
    KeyConditionExpression:
        '#accountId = :accountId AND #transactionId = :transactionId',
    ExpressionAttributeNames: {
      '#accountId': 'pk',
      '#transactionId': 'sk'
    },
    ExpressionAttributeValues: {
      ':accountId': accountId,
      ':transactionId': transactionId
    },
    ScanIndexForward: false, // To arrange results in descending order
    ConsistentRead: false,
    Limit: 1
  }

  const documentClient = new AWS.DynamoDB.DocumentClient();

  const result = await documentClient.query(params).promise()

  console.log(result)
})();

