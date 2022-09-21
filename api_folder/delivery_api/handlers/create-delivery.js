"use strict";
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const { DB_TABLE_NAME } = require("../const");
const docClient = new AWS.DynamoDB.DocumentClient();

function createDelivery(request) {
  if (
    !request ||
    !request.pickupTime ||
    !request.pickupAddress ||
    !request.deliveryAddress ||
    !request.webhookUrl
  )
    throw new Error(
      `To order delivery pickupTime, pickupAddress, deliveryAddress and webhookUrl should be provided`
    );
  const deliveryId = uuidv4();
  return docClient
    .put({
      TableName: DB_TABLE_NAME,
      Item: {
        deliveryId: deliveryId,
        pickupTime: request.pickupTime,
        pickupAddress: request.pickupAddress,
        webhookUrl: request.webhookUrl,
        deliveryStatus: "Курьер едет за товаром",
      },
    })
    .promise()
    .then((res) => {
      return { deliveryId: deliveryId };
    })
    .catch((saveError) => {
      throw saveError;
    });
}

module.exports = createDelivery;
