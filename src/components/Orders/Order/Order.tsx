import React from "react";
import { useDeleteOrderMutation, useGetDeliveriesQuery } from "../../../redux";
import { TOrder } from "../../../types";
import Loader from "../../Loader/Loader";
import styles from "./index.module.scss";

interface IProps {
  order: TOrder;
}

const Order: React.FC<IProps> = ({ order }) => {
  const [deleteOrder, { isLoading }] = useDeleteOrderMutation();
  const { refetch } = useGetDeliveriesQuery();

  const handleDeleteOrder = async () => {
    await deleteOrder(order.orderId);
    refetch();
  };

  return (
    <div className={styles.order}>
      <div className={styles.text}>
        <div className={styles.title}>
          <div className={styles.name}>{order.pizza}</div>
          <div className={styles.status}>{order.orderStatus}</div>
        </div>
        <div className={styles.time}>
          {order.time ? new Date(order.time).toLocaleString() : ""}
        </div>
        <div className={styles.price}>{order.price || 100} руб.</div>
      </div>
      <div className={styles.remove}>
        {isLoading ? (
          <Loader />
        ) : (
          <button className={styles.deleteBtn} onClick={handleDeleteOrder}>
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default Order;
