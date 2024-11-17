import Registration from "@/components/Registration";
import SeparatorLine from "./SeparatorLine";
import CheckingRegister from "./CheckingRegister";

export default function QrChecking({onChangeCheckingMode}: any){

  return (
    <Registration title="Marcaje">
      <h5 className="has-text-centered title is-5">Acerca tu tarjeta al escaner</h5>

      <div className="is-flex is-justify-content-center is-align-content-center">
          <CheckingRegister />
      </div>
      <SeparatorLine />
      <button className="button is-fullwidth is-medium" onClick={onChangeCheckingMode}>
        Usar PIN
      </button>
    </Registration>
  );
}