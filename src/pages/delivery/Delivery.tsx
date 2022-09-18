import React from "react";
import { useGetDeliveriesQuery } from "../../redux";
import { TDelivery } from "../../types";

const Delivery = () => {
  const deliveries = useGetDeliveriesQuery();

  if (deliveries.isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Доставка</h1>
      <img src="https://pizza-api-react.vercel.app/img/pizza-01.jpg" alt="" />
      <ul>
        {deliveries?.data?.map((delivery: TDelivery) => (
          <li key={delivery.deliveryId}>{delivery.pickupAddress}</li>
        ))}
      </ul>
    </div>
  );
};

export default Delivery;
