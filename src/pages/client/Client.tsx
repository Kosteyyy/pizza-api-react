import React from "react";
import { useGetOrdersQuery, useGetPizzasQuery } from "../../redux";
import { TOrder, TPizza } from "../../types";

const Client = () => {
  const pizzas = useGetPizzasQuery();
  const orders = useGetOrdersQuery();
  if (pizzas.isLoading || orders.isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>ЗАКАЗ ПИЦЦЫ</h1>
      <ul>
        {pizzas?.data?.map((pizza: TPizza) => (
          <li key={pizza.id}>{pizza.name}</li>
        ))}
      </ul>
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
