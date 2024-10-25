import styles from '@/styles/registration.module.css';

type RegistrationProp<P = unknown> = P & { children: React.ReactNode, title: string, };

export default function Registration({children, title }: RegistrationProp){
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <p>{title}</p>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}