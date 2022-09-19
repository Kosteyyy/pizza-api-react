import React from "react";
import Deliveries from "../../components/Deliveries/Deliveries";
import { useGetDeliveriesQuery } from "../../redux";
import { TDelivery } from "../../types";

const Delivery = () => {
  const deliveries = useGetDeliveriesQuery();

  if (deliveries.isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Доставка</h1>
      <Deliveries />
    </div>
  );
};

export default Delivery;
