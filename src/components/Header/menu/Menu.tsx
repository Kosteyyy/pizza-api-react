import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.scss";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isVisible) setIsVisible(false);
  }, [location]);

  return (
    <>
      <nav className={`${styles.nav} ${isVisible ? styles.visible : ""}`}>
        <ul>
          <li>
            <Link to="/">Заказ пиццы</Link>
          </li>
          <li>
            <Link to="/pizzeria">Пиццерия</Link>
          </li>
          <li>
            <Link to="/delivery">Доставка</Link>
          </li>
        </ul>
      </nav>
      <div
        className={`${styles.toggleMenuButton} ${
          isVisible ? styles.visible : ""
        }`}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <span></span>
      </div>
    </>
  );
};

export default Menu;
