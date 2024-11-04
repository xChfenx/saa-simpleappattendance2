import 'bulma/css/bulma.min.css';
import dashboard_styles from '@/app/dashboard/page.module.css';
import { fetchUsers } from '../utils/data';
import Link from 'next/link';

export default async function Dashboard(){

  const users = await fetchUsers();

  return (
    <>
      <nav className={`navbar ${dashboard_styles.nav}`}>

        {/* Mensaje de bienvenida */}
          <div className="navbar-item is-expanded">
            <div className='container has-text-centered'>
              <p className='title has-text-white'>{`Bienvenido, ${users[0].nombres}`}</p>
            </div>
          </div>
        </nav>

      <div className='columns'>
        <div className='column is-2'>
          {/* Botones de Reportes y Crear usuario */}
          <section className={`hero is-fullheight-with-navbar ${dashboard_styles.hero}`}>
            <div className="hero-body">
              <div className="container">
                <div className="buttons">
                  <div className="block">
                    <Link href="#" className="button is-medium is-outlined">Reportes</Link>
                  </div>
                  <div className="block">
                    <Link href="/dashboard/create" className="button is-medium">Crear usuario</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón de cerrar sesión */}
            <div className="hero-foot">
              <nav className="level">
                <div className="level-item">
                  <div className="buttons">
                    <Link href="/" className="button is-light">
                      <strong>Cerrar sesión</strong>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
            
          </section>
        </div>

        {/* Tabla de usuarios */}
        <div className='column is-align-items-stretch'>
          <table className='table is-hoverable is-fullwidth'>
            <thead>
              <tr>
                <th>RUT</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Correo</th>
                <th>Área</th>
                <th>Cargo</th>
                <th>Tipo Horario</th>
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
                <td>{user.tipoHorario}</td>
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