import React from "react";
import { TOrder } from "../../../types";
import styles from "./index.module.scss";

interface IProps {
  order: TOrder;
}

const Order: React.FC<IProps> = ({ order }) => {
  const date = new Date();
  return (
    <div className={styles.order}>
      <div className={styles.text}>
        <div className={styles.name}>{order.pizza}</div>
        <div className={styles.time}>{order.time || date.toLocaleString()}</div>
        <div className={styles.price}>{order.price || 100} руб.</div>
      </div>
      <div className={styles.remove}>
        <button className={styles.deleteBtn}>&times;</button>
      </div>
    </div>
  );
};

export default Order;
