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
  time: number;
  price: number;
};

export enum OrderStatus {
  pending = "Ожидает",
  inProgress = "Доставляется",
  delivered = "Доставлен",
}

export type TDelivery = {
  deliveryId: string;
  pickupTime: string;
  pickupAddress: string;
  webhookUrl: string;
};
