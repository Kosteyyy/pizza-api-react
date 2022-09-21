import React from "react";
import Logo from "../../assets/logo_pizza-min.svg";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import Menu from "./menu/Menu";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.header}>
          <Link to="/">
            <img src={Logo} />
          </Link>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
