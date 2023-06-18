import React from "react";
import style from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={`${style.footer}`}>
      <p>
        {" "}
        © 2022 Copyright <span> Hagar Ahmed</span>
      </p>
    </div>
  );
}
