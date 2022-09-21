"use strict";
const AWS = require("aws-sdk");
const { DB_TABLE_NAME } = require("../const");
const docClient = new AWS.DynamoDB.DocumentClient();

function deleteDelivery(deliveryId) {
  if (!deliveryId) {
    throw new Error("You have to supply order Delivery ID to delete it");
  }
  return docClient
    .delete({
      TableName: DB_TABLE_NAME,
      Key: {
        deliveryId: deliveryId,
      },
    })
    .promise()
    .then((res) => {
      return { message: `Delivery ${deliveryId} was deleted` };
    })
    .catch((deleteError) => {
      throw deleteError;
    });
}

module.exports = deleteDelivery;
