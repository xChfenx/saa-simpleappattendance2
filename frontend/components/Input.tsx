import styles from "@/styles/input.module.css";
import { HTMLInputTypeAttribute } from "react";
import  { useState } from 'react';

type Input = {
  placeholder: string;
  type: HTMLInputTypeAttribute | undefined;
  required: boolean | undefined;
  name: string | undefined;
};

export default function Input({label, input} : {input: Input, label: string}){

  // States variables
  const [inputText, setInputText] = useState('');

  function handleInputChange(e: any){
    setInputText(e.target.value);
  }

  return (
    <div className={styles.input_container}>
      <label className={styles.label}>
        <p>{label}</p>
        <input 
          name={input.name} 
          type={input.type} 
          placeholder={input.placeholder} 
          required={input.required}
          value={ inputText }
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}