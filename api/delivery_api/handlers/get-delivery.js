"use strict";
const AWS = require("aws-sdk");
const { DB_TABLE_NAME } = require("../const");
const docClient = new AWS.DynamoDB.DocumentClient();

function getDeliveries(deliveryId) {
  if (!deliveryId)
    return docClient
      .scan({
        TableName: DB_TABLE_NAME,
      })
      .promise()
      .then((res) => res.Items)
      .catch((readError) => {
        throw readError;
      });

  return docClient
    .get({
      TableName: DB_TABLE_NAME,
      Key: {
        deliveryId: deliveryId,
      },
    })
    .promise()
    .then((res) => res.Item)
    .catch((readError) => {
      throw readError;
    });
}

module.exports = getDeliveries;
