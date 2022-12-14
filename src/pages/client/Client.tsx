import Loader from "../../components/Loader/Loader";
import Orders from "../../components/Orders/Orders";
import Pizzas from "../../components/Pizzas/Pizzas";
import {
  useAddOrderMutation,
  useGetOrdersQuery,
  useGetPizzasQuery,
} from "../../redux";
import { TPizza } from "../../types";
import styles from "./index.module.scss";

const Client = () => {
  const pizzas = useGetPizzasQuery();
  const orders = useGetOrdersQuery();

  return (
    <div className={`${styles.wrapper} container`}>
      <h1>ЗАКАЗ ПИЦЦЫ {pizzas.isLoading && <Loader />}</h1>

      <section className={styles.pizzas}>
        {pizzas?.data ? <Pizzas pizzas={pizzas.data} /> : null}
      </section>
      <section className={styles.orders}>
        <h2>Ваши заказы:</h2>
        {orders?.data ? <Orders orders={orders.data} /> : null}
      </section>
    </div>
  );
};

export default Client;
