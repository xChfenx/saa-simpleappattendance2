"use client";

import React from "react";
import styles from "../styles/button.module.css";

type Button = {
  title: string;
  color: string;
  background: string;
  height: string;
  width: string;
};

export default function Button({ button_style, onClickEvent, type}: {button_style: Button; onClickEvent: any; type: any}) {
  return (
    <button
      onClick={onClickEvent}
      className={styles.button}
      style={{
        height: button_style.height,
        width: button_style.width,
        backgroundColor: button_style.background,
        border: "5rem",
      }}
      type={type}
    >
      <p style={{ color: button_style.color }}>{button_style.title}</p>
    </button>
  );
}
