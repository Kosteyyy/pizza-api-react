"use strict";
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const rp = require("minimal-request-promise");
const { DELIVERY_API_URL, PIZZA_API_URL, DB_TABLE_NAME } = require("../const");

function createOrder(request) {
  if (!request || !request.pizza || !request.address) {
    throw new Error(
      "To order pizza please provide pizza type and adress where pizza should be delivered"
    );
  }
  return rp
    .post(`${DELIVERY_API_URL}/delivery`, {
      headers: {
        Authorization: "aunt-marias-pizzeria-1234567890",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        pickupTime: new Date(
          Date.parse(request.time) + 10 * 60 * 1000
        ).toISOString(),
        pickupAddress: "Пиццерия Pizza Hot",
        deliveryAddress: request.address,
        webhookUrl: `${PIZZA_API_URL}/delivery`,
      }),
    })
    .then((rawResponse) => JSON.parse(rawResponse.body))
    .then((response) => {
      return docClient
        .put({
          TableName: DB_TABLE_NAME,
          Item: {
            orderId: response.deliveryId,
            pizza: request.pizza,
            address: request.address,
            orderStatus: "Готовится",
            price: request.price,
            time: request.time,
          },
        })
        .promise();
    })
    .then((res) => {
      console.log("Заказ сохранен!", res);
      return res;
    })
    .catch((saveError) => {
      console.log("Oops, order is not saved :( ", saveError);
      throw saveError;
    });
}

module.exports = createOrder;
