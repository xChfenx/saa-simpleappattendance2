"use client";

import Button from "@/components/Button";
import home_styles from "./page.module.css";
import registration_content_styles from "@/styles/registration_content.module.css";
import login_content_styles from "@/styles/login_content.module.css";
import Registration from "@/components/Registration";
import { QRScannerIcon } from "@/components/icons/QRScannerIcon";
import Input from "@/components/Input";
import { useState } from "react";
import { login } from "./utils/login";
import Form from 'next/form';

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
              type="button"
            />
      </header>
      <main className={home_styles.full_content_main}>
        {isLogin ? (
          <Form action={async (formData) => {
            await login(formData);
          }}>
            <Registration title="Ingresar">
              <div className={login_content_styles.registration_content}>
                <Input label="Correo" input={{
                  name: "correo",
                  required: true,
                  placeholder: "juan.perez@correo.cl",
                  type: "text"
                }} />
                <Input label="Contraseña" input={{
                  name: "contrasena",
                  required: true,
                  placeholder: "* * * * * *",
                  type: "password"
                }}/>
                <hr />
                <div className={login_content_styles.buttons_container}>
                  <Button
                    onClickEvent={null}
                    button_style={{
                      title: "Iniciar sesión",
                      color: "#EDF1E9",
                      background: "#76817F",
                      height: "4rem",
                      width: "10rem",
                    }}
                    type="submit"
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
                    type="button"
                  />
                </div>
              </div>
            </Registration>
          </Form>
        ) : (
          <Registration title="Marcaje">
            <div className={registration_content_styles.registration_content}>
              <p>Acerca tu tarjeta al escaner</p>
              <div className={registration_content_styles.qr_icon}>
                <QRScannerIcon />
              </div>
              <hr />
              <Button
                onClickEvent={null}
                button_style={{
                  title: "Usar PIN",
                  color: "#333333",
                  background: "#EBEBEB",
                  height: "4rem",
                  width: "100%",
                }}
                type="button"
              />
            </div>
          </Registration>
        )}
      
      </main>
    </div>
  );
}
