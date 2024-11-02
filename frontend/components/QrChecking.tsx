import Registration from "@/components/Registration";
import { QRScannerIcon } from "@/components/icons/QRScannerIcon";
import Button from "@/components/Button";
import registration_content_styles from "@/styles/registration_content.module.css";

export default function QrChecking({onChangeCheckingMode}: any){
  return (
    <Registration title="Marcaje">
      <div className={registration_content_styles.registration_content}>
        <p>Acerca tu tarjeta al escaner</p>
        <div className={registration_content_styles.qr_icon}>
          <QRScannerIcon />
        </div>
        <hr />
        <Button
          onClickEvent={onChangeCheckingMode}
          button_style={{
            title: "Usar PIN",
            color: "#333333",
            background: "#EBEBEB",
            height: "3.5rem",
            width: "100%",
          }}
          type="button"
        />
      </div>
    </Registration>
  );
}