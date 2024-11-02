import Form from "next/form";
import Registration from "./Registration";
import { login } from "@/app/utils/login";
import Input from "@/components/Input";
import Button from "@/components/Button";
import login_content_styles from "@/styles/login_content.module.css";

export default function Login({onSwitchMode} : any){
  return (
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
                height: "3.5rem",
                width: "10rem",
              }}
              type="submit"
            />
  
            <Button
              onClickEvent={onSwitchMode}
              button_style={{
                title: "Cancelar",
                color: "#333333",
                background: "#EBEBEB",
                height: "3.5rem",
                width: "13rem",
              }}
              type="button"
            />
          </div>
        </div>
      </Registration>
    </Form>
  );
}