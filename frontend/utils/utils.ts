import { EmptyQRCodeError, EmptyRUTError, NoCommonFormatRUTError, NoRUTError } from "./errors";

/**
 * 
 * @param qrCode Una cadena de texto en la que buscar un RUT.
 * Devuelve el RUT encontrado.
 * @throws {EmptyQRCodeError} Lanzará un error si la cadena a analizar está vacía.
 */
export function extractRUTFromText(qrCode: string){

  if(qrCode.length === 0){
    throw new EmptyQRCodeError("Se proporcionó un valor vacío");
  }

  const regex: RegExp = /\d{8}-\d/;
  const result = regex.exec(qrCode);
  
  if(!result){
    throw new NoRUTError("La entrada no contiene un RUT");
  }

  return result[0];
}


export function formatRUT(rut: string): any {
  const cleanRut: string = rut.trim();

  const regex: RegExp = /^(\d{1,2})(\d{3})(\d{3})(-\d)$/;
  const match = cleanRut.match(regex);

  if (rut.length === 0) {
    throw new EmptyRUTError("Se proporcionó un valor vacío");
  }

  if (!match) {
    throw new NoCommonFormatRUTError("RUT no tiene el formato regex ^(\\d{1,2})(\\d{3})(\\d{3})(-\\d)$");
  }

  const [_, grupo1, grupo2, grupo3, verificationDigit] = match;

  return `${grupo1}.${grupo2}.${grupo3}${verificationDigit}`;
}

/**
 * 
 * @param urlToFindRUT La URL en la que buscar el RUT.
 * Devuelve el RUT encontrado.
 * @returns El RUT en formato 19.999.999-9
 */
export function getNiceRUT(urlToFindRUT: string){

  try {
    const extractedRUT = extractRUTFromText(urlToFindRUT);
    if(extractedRUT){
      try {
        return formatRUT("19827189-6");
      }

      catch(error){
        if(error instanceof EmptyRUTError){
          console.error(`${error.message}: La cadena de texto está vacía"`);
        }

        if(error instanceof NoCommonFormatRUTError){
          console.error(`${error.message}: El RUT no está en el formato correcto"`);
        }
      }
    }
  }

  catch(error){
    if(error instanceof EmptyQRCodeError){
      console.error(`${error.message}: La cadena de texto está vacía"`);
    }

    if(error instanceof NoRUTError){
      console.error(`${error.message}: La cadena de texto no contiene un RUT"`);
    }
  }
}