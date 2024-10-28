"use client";

import Button from "@/components/Button";
import home_styles from "./page.module.css";
import registration_content_styles from "@/styles/registration_content.module.css";
import login_content_styles from "@/styles/login_content.module.css";
import Registration from "@/components/Registration";
import { QRScannerIcon } from "@/components/icons/QRScannerIcon";
import Input from "@/components/Input";
import { useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={home_styles.full_content}>
      <header className={home_styles.full_content_header}>
      <Button
              onClickEvent={() => setIsLogin(true)}
              button_style={{
                title: "Iniciar sesión",
                color: "#EBEBEB",
                background: "#333333",
                height: "4rem",
                width: "10%",
              }}
            />
      </header>
      <main className={home_styles.full_content_main}>
        {isLogin ? (
          <Registration title="Ingresar">
          <div className={login_content_styles.registration_content}>
            <Input required={true} inputType="email" label="Correo" placeholder="tucorreo@gmail.com" />
            <Input required={true} inputType="password" label="Contraseña" placeholder="* * * * * * *" />
            <hr />
            <div className={login_content_styles.buttons_container}>
              <Button
                onClickEvent={()=>alert("Iniciar sesión")}
                button_style={{
                  title: "Iniciar sesión",
                  color: "#EDF1E9",
                  background: "#76817F",
                  height: "4rem",
                  width: "10rem",
                }}
              />

              <Button
                onClickEvent={() => setIsLogin(false)}
                button_style={{
                  title: "Cancelar",
                  color: "#333333",
                  background: "#EBEBEB",
                  height: "4rem",
                  width: "13rem",
                }}
              />
            </div>
          </div>
        </Registration>
        ) : (
          <Registration title="Marcaje">
            <div className={registration_content_styles.registration_content}>
              <p>Acerca tu tarjeta al escaner</p>
              <div className={registration_content_styles.qr_icon}>
                <QRScannerIcon />
              </div>
              <hr />
              <Button
                onClickEvent={() => alert("Usar PIN")}
                button_style={{
                  title: "Usar PIN",
                  color: "#333333",
                  background: "#EBEBEB",
                  height: "4rem",
                  width: "100%",
                }}
              />
            </div>
          </Registration>
        )}
      
      </main>
    </div>
  );
}
