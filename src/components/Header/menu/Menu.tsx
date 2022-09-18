import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav>
        <Link to="/">Заказ пиццы</Link>
        <Link to="/pizzeria">Пиццерия</Link>
        <Link to="/delivery">Доставка</Link>
      </nav>
    </div>
  );
};

export default Menu;
