import styles from '@/styles/registration.module.css';

type RegistrationProp<P = unknown> = P & { children: React.ReactNode, title: string, };

export default function Registration({children, title }: RegistrationProp){
  return (
    <div className={styles.registration_body}>
      <header className={styles.registration_header}>
        <p>{title}</p>
      </header>
      <main className={styles.registration_main}>
        {children}
      </main>
    </div>
  );
}