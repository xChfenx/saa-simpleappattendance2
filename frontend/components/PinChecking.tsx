import Registration from "@/components/Registration";
import SeparatorLine from "./SeparatorLine";

export default function PinChecking({onChangeCheckingMode} : any){
  return (
    <Registration title="Marcaje">
      <form method="post">
        {/* RUT */}
        <div className="field">
          <label className="label">RUT</label>
          <div className="control">
            <input className="input" type="text" placeholder="12.345.678-9" required/>
          </div>
        </div>

        {/* PIN */}
        <div className="field">
          <label className="label">PIN</label>
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
                {/* Marcar */}
                <button className="button is-dark is-fullwidth" type="submit">Marcar asistencia</button>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <div className="control">
                {/* Cancelar */}
                <button className="button is-fullwidth" onClick={onChangeCheckingMode}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Registration>
  );
}