import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetOrdersQuery, useGetPizzasQuery } from "../../redux";
import { TOrder, TPizza } from "../../types";
import styles from "./index.module.scss";

const Client = () => {
  const pizzas = useGetPizzasQuery();
  const orders = useGetOrdersQuery();
  if (pizzas.isLoading || orders.isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>ЗАКАЗ ПИЦЦЫ</h1>
      <div className={styles.cardGrid}>
        {pizzas?.data?.map((pizza: TPizza) => (
          <ProductCard key={pizza.id} pizza={pizza} />
        ))}
      </div>

      <h2>Ваши заказы:</h2>

      {Array.isArray(orders?.data) ? (
        <ul>
          {orders?.data?.map((order: TOrder) => (
            <li key={order.orderId}>{order.pizza}</li>
          ))}
        </ul>
      ) : (
        <div>{orders?.data?.pizza}</div>
      )}
    </div>
  );
};

export default Client;
