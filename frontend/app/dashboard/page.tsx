import 'bulma/css/bulma.min.css';
import dashboard_styles from '@/app/dashboard/page.module.css';
import Link from 'next/link';
import { CalendarIcon } from '@/components/icons/CalendarIcon';
import { SheetIcon } from '@/components/icons/SheetIcon';
import WelcomeMessage from '@/components/WelcomeMessage';
import StrongUserDetails from '@/components/StrongUserDetails';
import Logout from '@/components/Logout';
import TableUsers from '@/components/TableUsers';
import CustomNavbar from '@/components/CustomNavbar';

export default async function Dashboard(){

  return (
    <>
      {/* Mensaje de bienvenida */}
      <CustomNavbar />

      <div className='columns'>
        {/* Panel lateral izquierdo */}
        <div className='column is-2'>
          <div className="columns has-background-white">
            <div className="column is-10">
              <section className={`hero is-fullheight-with-navbar ${dashboard_styles.hero}`}>
                <div className="hero-body">
                  <div className="container">
                      <div className="block">
                        <Link href="/dashboard/create" className="button">Enrolar usuario</Link>
                      </div>
                  </div>
                </div>

                {/* Botón de cerrar sesión */}
                <Logout />
              </section>
            </div>
            <div className="column"></div>
          </div>
        </div>
        <div className='column has-background-white'>
          
            <div className="columns">
              <div className="column is-3">
                  <div className="field mt-6">
                    {/* Buscar trabajador */}
                    <label className="label is-medium">Buscar trabajador</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Juan Pérez" />
                    </div>
                  </div>
                  {/* Filtrar por fecha */}
                  <div className="field mt-5">
                    <span className="icon-text">
                      <span className='label is-medium'>Filtrar por fecha</span>
                      <span className='icon is-medium'><CalendarIcon /></span>
                    </span>
                  </div>
              </div>
              <div className="column"></div>
            </div>
            <div className="columns mt-5">
              <div className="column is-6">
                {/* Nombre de trabajador actual */}
                <StrongUserDetails />
              </div>
              <div className="column"></div>
              <div className="column is-1"><SheetIcon width="3rem" height="3rem"/></div>
            </div>

          {/* Tabla de usuarios */}
          <TableUsers onShowModal={null}/>
          
        </div>
      </div>
    </>
  ); 
}