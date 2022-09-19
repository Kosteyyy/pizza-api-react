import React from "react";
import { TOrder } from "../../types";
import styles from "./index.module.scss";
import Order from "./Order/Order";

interface IProps {
  orders: TOrder[];
}
// Передаем список заказов сюда потому что список для клиента и пиццерии может быть разным, а рендер его один и тот же пока
const Orders: React.FC<IProps> = ({ orders }) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.name}>Наименование</div>
        <div className={styles.time}>Время заказа</div>
        <div className={styles.price}>Цена</div>
        <div className={styles.remove}></div>
      </div>{" "}
      {orders.map((order) => (
        <Order order={order} />
      ))}
    </div>
  );
};

export default Orders;
