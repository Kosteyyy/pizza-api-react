"use strict";
const Api = require("claudia-api-builder");
const createDelivery = require("./handlers/create-delivery");
const deleteDelivery = require("./handlers/delete-delivery");
const getDeliveries = require("./handlers/get-delivery");
const updateDeliveryStatus = require("./handlers/update-delivery-status");

const api = new Api();

api.get("/", () => "Welcome to Delivery Company Co");

api.get(
  "/delivery",
  () => {
    return getDeliveries();
  },
  { success: 200, error: 400 }
);

api.get(
  "/delivery/{id}",
  (request) => {
    return getDeliveries(request.pathParams.id);
  },
  { success: 200, error: 400 }
);

api.post(
  "/delivery",
  (request) => {
    return createDelivery(request.body);
  },
  { success: 201, error: 400 }
);

api.delete(
  "/delivery/{id}",
  (request) => {
    return deleteDelivery(request.pathParams.id);
  },
  { success: 200, error: 400 }
);

api.post(
  "/deliveryupdate",
  (request) => {
    return updateDeliveryStatus(request.body);
  },
  {
    success: 200,
    error: 400,
  }
);

module.exports = api;
