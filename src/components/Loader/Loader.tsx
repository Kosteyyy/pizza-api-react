import React from "react";
import styles from "./index.module.scss";

const Loader = () => {
  return (
    <svg className={styles.svg} viewBox="0 0 50 50">
      <circle cx="20" cy="20" r="20"></circle>
    </svg>
  );
};

export default Loader;
