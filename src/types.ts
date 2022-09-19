export type TPizza = {
  id: number;
  name: string;
  img_url: string;
  price: number;
  ingredients: string[];
};

export type TOrder = {
  orderId: string;
  orderStatus: OrderStatus;
  pizza: string;
  address: string;
  time: string;
  price: number;
};

export enum OrderStatus {
  pending = "Готовится",
  inProgress = "Доставляется",
  delivered = "Доставлен",
}

export type TDelivery = {
  deliveryId: string;
  pickupTime: string;
  pickupAddress: string;
  webhookUrl: string;
  deliveryStatus: string;
};

export type TUpdateDeliveryBody = {
  id: string;
  status: string;
};

export enum DeliveryStatus {
  pending = "Курьер едет за товаром",
  inProgress = "Доставляется",
  delivered = "Доставлен",
}
