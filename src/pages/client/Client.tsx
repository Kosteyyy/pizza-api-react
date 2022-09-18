import React from "react";
import { useGetPizzasQuery } from "../../redux";
import { TPizza } from "../../types";

const Client = () => {
  const { data = [], isLoading } = useGetPizzasQuery();
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>ЗАКАЗ ПИЦЦЫ</h1>
      <ul>
        {data.map((pizza: TPizza) => (
          <li key={pizza.id}>{pizza.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Client;
