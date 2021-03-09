import React from "react";
import styles from "./pagination_button.module.scss";
import leftArrow from "../../../assets/icons/icon-left-arrow.png";
import Div from "../div/index";

const PaginationButton = ({ className, isEnabled, onClick, isRight }) => {
  return (
    <Div
      align
      justify
      className={`${styles.button_container} ${className} ${
        !isEnabled ? styles.disabled : ""
      }`}
      onClick={onClick}></Div>
  );
};

export default PaginationButton;
