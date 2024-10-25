import styles from "@/styles/input.module.css";

export default function Input({label, placeholder}: {label:  string, placeholder: string}){
  return (
      <div className={styles.input_container}>
        <label className={styles.label}>
          <p>{label}</p>
          <input placeholder={placeholder} />
        </label>
      </div>
  );
}