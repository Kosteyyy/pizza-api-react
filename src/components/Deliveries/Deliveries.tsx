import React from "react";
import { useGetDeliveriesQuery } from "../../redux";
import { TDelivery } from "../../types";
import { sortDeliveriesByDate } from "../../utils/sortDeliveries";
import Delivery from "./Delivery/Delivery";
import styles from "./index.module.scss";

const Deliveries: React.FC = () => {
  const { data, isLoading } = useGetDeliveriesQuery();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.pickupAddress}>Адрес забора</div>
        <div className={styles.time}>Время забора</div>
      </div>
      {data
        ? sortDeliveriesByDate(data).map((delivery: TDelivery) => (
            <Delivery key={delivery.deliveryId} delivery={delivery} />
          ))
        : null}
    </div>
  );
};

export default Deliveries;
