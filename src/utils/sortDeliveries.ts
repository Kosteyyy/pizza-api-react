import { TDelivery } from "../types";

export function sortDeliveriesByDate(deliveries: TDelivery[]) {
  let newDeliveries = [...deliveries];
  return newDeliveries.sort((delivery, nextdelivery) => {
    if (!delivery.pickupTime) return 1;
    if (!nextdelivery.pickupTime) return -1;
    return (
      Date.parse(nextdelivery.pickupTime) - Date.parse(delivery.pickupTime)
    );
  });
}
