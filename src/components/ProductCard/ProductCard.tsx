import React from "react";
import { TPizza } from "../../types";
import styles from "./index.module.scss";

interface IProps {
  pizza: TPizza;
}

const ProductCard: React.FC<IProps> = ({ pizza }) => {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <div className={styles.title}>{pizza.name}</div>
        <div className={styles.image}>
          <img src={pizza.img_url} alt={pizza.name} />
        </div>
        <div className={styles.description}>
          <b>Ингредиенты: </b>
          {pizza.ingredients.join(", ")}
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.btn}>Заказать</button>
        <div className={styles.price}>
          <span className={styles.priceTitle}>Цена: </span>{" "}
          <span className={styles.priceValue}>{pizza.price || "100"}</span>{" "}
          <span className={styles.priceCurrancy}>руб.</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
