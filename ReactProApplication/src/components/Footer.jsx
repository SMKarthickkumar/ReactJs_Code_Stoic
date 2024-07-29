import React from "react";
import style from "./footer.module.css";

const Footer = ({ completedTodos, TotalTodos }) => {
  return (
    <div className={style.footer}>
      <span className={style.item}>Completed Todos : {completedTodos}</span>
      <span className={style.item}>Total Todos : {TotalTodos}</span>
    </div>
  );
};

export default Footer;
