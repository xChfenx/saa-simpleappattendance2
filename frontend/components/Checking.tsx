import { useState } from "react";
import QrChecking from "@/components/QrChecking";
import PinChecking from "@/components/PinChecking";

export default function Checking(){
  const [checkingMode, setCheckingMode] = useState('qr'); // Modos: qr - pin
  return (
    <>
      {checkingMode === 'qr' ? (
        <QrChecking onChangeCheckingMode={() => setCheckingMode('pin')}/>
      ) : (
        <PinChecking onChangeCheckingMode={() => setCheckingMode('qr')}/>
      )}
    </>
  );
}