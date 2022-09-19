import React from "react";
import { useDispatch } from "react-redux";
import {
  deliveryApi,
  store,
  useAddOrderMutation,
  useGetDeliveriesQuery,
} from "../../redux";
import { TPizza } from "../../types";
import Loader from "../Loader/Loader";
import styles from "./index.module.scss";

interface IProps {
  pizza: TPizza;
}

const ProductCard: React.FC<IProps> = ({ pizza }) => {
  const [addOrder, { isLoading, isError }] = useAddOrderMutation();
  const { refetch } = useGetDeliveriesQuery();

  const handleAddOrder = async (pizza: TPizza) => {
    if (pizza) {
      await addOrder({
        pizza: pizza.name,
        address: "123456, Home City, Home Street, My Home",
        time: new Date().toISOString(),
        price: pizza.price,
      }).unwrap();
      refetch();
    }
  };

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
        <div className={styles.btndiv}>
          {isLoading ? (
            <Loader />
          ) : (
            <button
              className={styles.btn}
              onClick={() => handleAddOrder(pizza)}
              disabled={isLoading}
            >
              Заказать
            </button>
          )}
        </div>
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
