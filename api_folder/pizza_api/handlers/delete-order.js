const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const rp = require("minimal-request-promise");
const { DELIVERY_API_URL, PIZZA_API_URL, DB_TABLE_NAME } = require("../const");

function deleteOrder(orderId) {
  if (!orderId) throw new Error("You have to supply order ID to delete it");
  return rp
    .delete(`${DELIVERY_API_URL}/delivery/${orderId}`, {
      headers: {
        Authorization: "aunt-marias-pizzeria-1234567890",
        "Content-type": "application/json",
      },
    })
    .then((rawResponse) => JSON.parse(rawResponse.body))
    .then((response) => {
      return docClient
        .delete({
          TableName: DB_TABLE_NAME,
          Key: {
            orderId: orderId,
          },
        })
        .promise()
        .then((res) => {
          return { message: `Order ${orderId} was deleted` };
        })
        .catch((deleteError) => {
          throw deleteError;
        });
    });
}

module.exports = deleteOrder;
