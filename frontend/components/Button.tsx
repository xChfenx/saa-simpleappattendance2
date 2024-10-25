'use client';

import React from "react";
import styles from "../styles/button.module.css";

type Button = {
  title: string;
  color: string;
  background: string;
  height: string;
}

export default function Button({button}: {button: Button}){

  return (
    <button className={styles.button} 
      style={{
        height: button.height,
        backgroundColor: button.background,
        border: '5rem'
    }}>
      <p style={{color: button.color}}>
        {button.title}
      </p>
    </button>
  );
}