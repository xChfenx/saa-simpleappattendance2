import Button from '@/components/Button';
import home_styles from './page.module.css';
import registration_content_styles from '@/styles/registration_content.module.css';
import Registration from '@/components/Registration';
import { QRScannerIcon } from '@/components/icons/QRScannerIcon';

export default function Home(){
  return (
    <div className={home_styles.full_content}>
      <header className={home_styles.full_content_header}>
        <p>Iniciar sesión</p>
      </header>
      <main className={home_styles.full_content_main}>
        
        <Registration title='Marcaje' >
          <div className={registration_content_styles.registration_content}>
            <p>Acerca tu tarjeta al escaner</p>
            <div className={registration_content_styles.qr_icon}>
              <QRScannerIcon />
            </div>
            <hr />
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

