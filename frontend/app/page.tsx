import Button from '@/components/Button';
import styles from './page.module.css';
import Registration from '@/components/Registration';

export default function Home(){
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <p>Iniciar sesión</p>
      </header>
      <main className={styles.main}>
        <Registration title='Marcaje'>
          <Button button={{
            title: 'Usar PIN',
            color: '#333333',
            background: '#EBEBEB',
            height: '5rem',
            width: '20rem',
            }}/>
        </Registration>
      </main>
    </div>
  );
}