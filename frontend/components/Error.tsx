'use client';

import 'bulma/css/bulma.min.css';

export default function Error({errorMessage, isError=false} : {errorMessage: string, isError: boolean}){
  
    if(isError){
      return <p>{errorMessage}</p>
    }
    return null;
}