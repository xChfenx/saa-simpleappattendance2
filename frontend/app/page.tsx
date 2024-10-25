import Button from '@/components/Button';
import home_styles from './page.module.css';
import registration_content_styles from '@/styles/registration_content.module.css';
import login_content_styles from '@/styles/login_content.module.css';
import Registration from '@/components/Registration';
import { QRScannerIcon } from '@/components/icons/QRScannerIcon';
import Input from '@/components/Input';

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
            height: '4rem',
            width: '100%'
            }}/>
          </div> 
        </Registration>

        {/* Login */}
        <Registration title='Ingresar' >
          <div className={login_content_styles.registration_content}>
            <Input label="Correo" placeholder="tucorreo@gmail.com"/>
            <Input label="Contraseña" placeholder="* * * * * * *"/>
            <hr />
            <div className={login_content_styles.buttons_container}>
              <Button button={{
              title: 'Iniciar sesión',
              color: '#EDF1E9',
              background: '#76817F',
              height: '4rem',
              width: '10rem'
              }}/>

              <Button button={{
              title: 'Cancelar',
              color: '#333333',
              background: '#EBEBEB',
              height: '4rem',
              width: '13rem'
              }}/>
            </div>
          </div>
        </Registration>
      </main>
    </div>
  );
}

