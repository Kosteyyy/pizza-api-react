"use strict";
const AWS = require("aws-sdk");
const { DB_TABLE_NAME } = require("../const");
const docClient = new AWS.DynamoDB.DocumentClient();
const rp = require("minimal-request-promise");

function updateDeliveryStatus(request) {
  if (!request.id || !request.status)
    throw Error("Необходимо указать ID доставки и новый статус");

  return docClient
    .get({
      TableName: DB_TABLE_NAME,
      Key: {
        deliveryId: request.id,
      },
    })
    .promise()
    .then((result) => {
      //   return result;
      return rp
        .post(result.Item.webhookUrl, {
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            deliveryId: request.id,
            status: request.status,
          }),
        })
        .then((response) => {
          return docClient
            .update({
              TableName: DB_TABLE_NAME,
              Key: { deliveryId: request.id },
              AttributeUpdates: {
                deliveryStatus: {
                  Action: "PUT",
                  Value: request.status,
                },
              },
            })
            .promise()
            .then((res) => res);
        })
        .then((res) => res)
        .catch((updateError) => {
          throw updateError;
        });
    });
}

module.exports = updateDeliveryStatus;
