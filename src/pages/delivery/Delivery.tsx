import React from "react";
import Deliveries from "../../components/Deliveries/Deliveries";
import Loader from "../../components/Loader/Loader";
import { useGetDeliveriesQuery } from "../../redux";

const Delivery = () => {
  const deliveries = useGetDeliveriesQuery();

  return (
    <div className="container">
      <h1>Доставка</h1>
      {deliveries.isLoading && <Loader />}
      <Deliveries />
    </div>
  );
};

export default Delivery;
