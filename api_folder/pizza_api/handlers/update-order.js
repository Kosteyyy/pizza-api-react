const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function updateOrder(orderId, options) {
  if (!orderId || !options)
    throw new Error("You have to provide order ID and updated data");

  return docClient
    .update({
      TableName: "pizza-orders",
      Key: {
        orderId: orderId,
      },
      UpdateExpression: "set pizza = :p, address=:a",
      ExpressionAttributeValues: {
        ":p": options.pizza,
        ":a": options.address,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise()
    .then((res) => res.Attributes)
    .catch((updateError) => {
      throw updateError;
    });
}

module.exports = updateOrder;
