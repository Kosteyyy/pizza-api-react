import Orders from "../../components/Orders/Orders";
import Pizzas from "../../components/Pizzas/Pizzas";
import { useGetOrdersQuery, useGetPizzasQuery } from "../../redux";
import styles from "./index.module.scss";

const Client = () => {
  const pizzas = useGetPizzasQuery();
  const orders = useGetOrdersQuery();
  if (pizzas.isLoading || orders.isLoading) return <h1>Loading...</h1>;
  return (
    <div className={styles.wrapper}>
      <h1>ЗАКАЗ ПИЦЦЫ</h1>
      <section className={styles.pizzas}>
        {pizzas?.data ? <Pizzas pizzas={pizzas.data} /> : null}
      </section>
      <section className={styles.orders}>
        <h2>Ваши заказы:</h2>
        {Array.isArray(orders?.data) ? (
          <Orders orders={orders.data} />
        ) : (
          <div>{orders?.data?.pizza}</div>
        )}
      </section>
    </div>
  );
};

export default Client;
