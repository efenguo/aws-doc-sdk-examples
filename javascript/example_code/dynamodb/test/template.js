var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-southeast-2'});
// Set credentials
var credentials = new AWS.SharedIniFileCredentials({profile: 'bcl-dax-sandbox'});
AWS.config.credentials = credentials;
// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
