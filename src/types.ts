export type TPizza = {
  id: number;
  name: string;
  ingredients: string[];
};

export type TOrder = {
  orderId: string;
  orderStatus: OrderStatus;
  pizza: string;
  address: string;
};

export enum OrderStatus {
  pending = "Ожидает",
  inProgress = "Доставляется",
  delivered = "Доставлен",
}
