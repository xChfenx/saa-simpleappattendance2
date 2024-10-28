import styles from "@/styles/input.module.css";

export default function Input({label, placeholder, inputType, required}: {label:  string, placeholder: string, inputType: string, required: boolean}){

  return (
      <div className={styles.input_container}>
        <label className={styles.label}>
          <p>{label}</p>
          <input type={inputType} placeholder={placeholder} required={required} />
        </label>
      </div>
  );
}