import 'bulma/css/bulma.min.css';
import dashboard_styles from '@/app/dashboard/page.module.css';
import { fetchUsers } from '../utils/data';
import Link from 'next/link';
import { CalendarIcon } from '@/components/icons/CalendarIcon';
import { SheetIcon } from '@/components/icons/SheetIcon';

export default async function Dashboard(){

  const users = await fetchUsers();
  const user = users[0];

  return (
    <>
      <nav className={`navbar ${dashboard_styles.nav}`}>
        {/* Mensaje de bienvenida */}
        <div className="navbar-item is-expanded">
          <div className='container has-text-centered'>
            <p className='title has-text-white'>{`Bienvenido, ${user.nombres}`}</p>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <p className='subtitle has-text-white'>{`${user.area}`}</p>
          </div>
        </div>
      </nav>

      <div className='columns'>
        {/* Botones de Reportes y Crear usuario */}
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
                <div className="hero-foot">
                  <div className="section">
                    <div className="container">
                      <Link href="/" className="button is-light">
                        <strong>Cerrar sesión</strong>
                      </Link>
                    </div>
                  </div>
                </div>
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
                <h2 className="subtitle"><strong>{`${user.nombres} ${user.apellidos}`}</strong>{`(${user.rut})`}</h2>
              </div>
              <div className="column"></div>
              <div className="column is-1"><SheetIcon width="3rem" height="3rem"/></div>
            </div>

          {/* Tabla de usuarios */} 
          <table className='table is-hoverable is-fullwidth'>
            <thead>
              <tr>
                <th>RUT</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Correo</th>
                <th>Área</th>
                <th>Cargo</th>
                <th>Turno</th>
                <th>Empresa</th>
                <th>Asistencia</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
              <tr key={user.rut}>
                <th>{user.rut}</th>
                <td>{user.nombres}</td>
                <td>{user.apellidos}</td>
                <td>{user.correo}</td>
                <td>{user.area}</td>
                <td>{user.cargo}</td>
                <td>{user.turno}</td>
                <td>{user.empresa}</td>
                <td>{user.asistencia}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  ); 
}