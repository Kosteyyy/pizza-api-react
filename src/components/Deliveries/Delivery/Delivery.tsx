import React from "react";
import {
  useGetOrdersQuery,
  useUpdateDeliveryStatusMutation,
} from "../../../redux";
import { DeliveryStatus, TDelivery } from "../../../types";
import Loader from "../../Loader/Loader";
import styles from "./index.module.scss";

interface IProps {
  delivery: TDelivery;
}

const Delivery: React.FC<IProps> = ({ delivery }) => {
  const [updateStatus, updateExtra] = useUpdateDeliveryStatusMutation();
  const { refetch } = useGetOrdersQuery();

  const handleUpdateStatus = async () => {
    await updateStatus({
      id: delivery.deliveryId,
      status:
        delivery.deliveryStatus === DeliveryStatus.pending
          ? DeliveryStatus.inProgress
          : DeliveryStatus.delivered,
    }).unwrap();
    refetch();
  };

  return (
    <div className={styles.delivery}>
      <div className={styles.text}>
        <div className={styles.title}>
          <div className={styles.pickupAddress}>{delivery.pickupAddress}</div>
          <div className={styles.status}>{delivery.deliveryStatus}</div>
        </div>
        <div className={styles.updateStatus}>
          <button
            className={styles.btn}
            onClick={handleUpdateStatus}
            disabled={delivery.deliveryStatus === DeliveryStatus.delivered}
          >
            {updateExtra.isLoading ? (
              <Loader />
            ) : delivery.deliveryStatus === DeliveryStatus.delivered ? (
              "Доставлено"
            ) : (
              "Следующий статус"
            )}
            {/* <span></span> */}
          </button>
        </div>
        <div className={styles.time}>
          {delivery.pickupTime
            ? new Date(delivery.pickupTime).toLocaleString()
            : ""}
        </div>
      </div>

      {/* <div className={styles.remove}>
        <button
          className={styles.deleteBtn}
          onClick={() => deleteDelivery(delivery.deliveryId)}
        >
          &times;
        </button>
      </div> */}
    </div>
  );
};

export default Delivery;
