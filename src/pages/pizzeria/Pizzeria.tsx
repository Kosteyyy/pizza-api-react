import React from "react";
import Orders from "../../components/Orders/Orders";
import { useGetOrdersQuery } from "../../redux";

const Pizzeria = () => {
  const { data, isLoading } = useGetOrdersQuery();
  return (
    <div className="container">
      <h1>Пиццерия</h1>
      <h2>Заказы</h2>
      {data ? <Orders orders={data} /> : null}
    </div>
  );
};

export default Pizzeria;
