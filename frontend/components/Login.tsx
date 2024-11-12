import Form from "next/form";
import Registration from "./Registration";
import { login } from "@/app/utils/login";
import SeparatorLine from "./SeparatorLine";

export default function Login({onSwitchMode} : any){
  return (
    <Form action={async (formData) => {
      await login(formData);
      }}>
      <Registration title="Ingresar">

        {/* Correo */}
        <div className="field">
          <label className="label">Correo</label>
          <div className="control">
            <input className="input" type="email" placeholder="maria.fernanda@gmail.com" required/>
          </div>
        </div>

        {/* PIN */}
        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control">
            <input className="input" type="password" placeholder="****" required/>
          </div>
        </div>

        <SeparatorLine />

        {/* Botones */}
        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control">
                {/* Iniciar sesión */}
                <button className="button is-dark is-fullwidth" type="submit">Iniciar sesión</button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <div className="control">
                {/* Cancelar */}
                <button className="button is-fullwidth" onClick={onSwitchMode}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </Registration>
    </Form>
  );
}