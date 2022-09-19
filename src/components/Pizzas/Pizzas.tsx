import React from "react";
import { TPizza } from "../../types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./index.module.scss";

interface IProps {
  pizzas: TPizza[];
}

const Pizzas: React.FC<IProps> = ({ pizzas }) => {
  return (
    <div className={styles.cardGrid}>
      {pizzas.map((pizza: TPizza) => (
        <ProductCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default Pizzas;
