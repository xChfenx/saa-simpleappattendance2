"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Navbar from '@/components/Navbar';
import home_styles from "./page.module.css";
import Checking from "@/components/Checking";
import Login from "@/components/Login";
/**
 * Esta página muestra el navbar y el main con las cajas de marcaje
 */

export default function Home() {

  const [mode, setMode] = useState('checking');

  return (
    <>
      <div className={home_styles.full_content}>
        <Navbar>
          <Button
            onClickEvent={() => setMode('login')}
            button_style={{
              title: "Iniciar sesión",
              color: "#EBEBEB",
              background: "#333333",
              height: "4rem",
              width: "10%",
            }}
            type="button"
          />
        </Navbar>
        <main className={home_styles.full_content_main}>
          {mode === 'checking' ? (
            <Checking />
          ) : (
            <Login onSwitchMode={() => setMode('checking')}/>
          )} 
        </main>
      </div>
    </>
  );
}
