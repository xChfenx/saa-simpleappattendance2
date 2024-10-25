import Button from '@/components/Button';
import page_styles from './page.module.css';
import registration_styles from '../styles/registration.module.css';
import Registration from '@/components/Registration';
import { QRScannerIcon } from '@/components/icons/QRScannerIcon';

export default function Home(){
  return (
    <div className={page_styles.body}>
      <header className={page_styles.header}>
        <p>Iniciar sesión</p>
      </header>
      <main className={page_styles.main}>
        
        <Registration title='Marcaje' >
          <div className={registration_styles.registration_content}>
            <p>Acerca tu tarjeta al escaner</p>
            <div className={registration_styles.qr_icon}>
              <QRScannerIcon />
            </div>
            <hr className={registration_styles.horizontal_line}/>
          </div>
          <div className={registration_styles.buttons_container}>
            <Button button={{
            title: 'Usar PIN',
            color: '#333333',
            background: '#EBEBEB',
            height: '4rem'
            }}/>
          </div>
        </Registration>
      </main>
    </div>
  );
}

