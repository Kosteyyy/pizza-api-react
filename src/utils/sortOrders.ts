import { TOrder } from "../types";

export function sortOrdersByDate(orders: TOrder[]) {
  let newOrders = [...orders];
  return newOrders.sort((order, nextOrder) => {
    if (!order.time) return 1;
    if (!nextOrder.time) return -1;
    return Date.parse(nextOrder.time) - Date.parse(order.time);
  });
}
