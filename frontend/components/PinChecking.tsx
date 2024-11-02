import Registration from "@/components/Registration";
import Input from "@/components/Input";
import Button from "@/components/Button";
import login_content_styles from "@/styles/login_content.module.css";

export default function PinChecking({onChangeCheckingMode} : any){
  return (
    <Registration title="Marcaje">
      <div className={login_content_styles.registration_content}>
        <Input label="RUT" input={{
          name: "rut",
          required: true,
          placeholder: "123456789",
          type: "text"
        }} />
        <Input label="PIN" input={{
          name: "pin",
          required: true,
          placeholder: "* * * *",
          type: "password"
        }}/>
        <hr />
        <div className={login_content_styles.buttons_container}>
          <Button
            onClickEvent={null}
            button_style={{
              title: "Marcar",
              color: "#EBEBEB",
              background: "#76817F",
              height: "3.5rem",
              width: "35%",
            }}
            type="submit"
          />
          <Button
            onClickEvent={onChangeCheckingMode}
            button_style={{
              title: "Cancelar",
              color: "#333333",
              background: "#EBEBEB",
              height: "3.5rem",
              width: "50%",
            }}
            type="button"
          />
        </div>
      </div>
    </Registration>
  );
}