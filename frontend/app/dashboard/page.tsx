import 'bulma/css/bulma.min.css';
import nav_styles from '@/app/dashboard/page.module.css';

import { fetchUsers } from '../utils/data';

export default async function Dashboard(){

  const users = await fetchUsers();

  return (
    <>
        <nav className={`navbar ${nav_styles.nav}`}>
          <div className='container is-fluid'>
            <div className='is-flex navbar-end'>
              <p className='has-text-white has-text-centered is-align-content-center'>{`Bienvenido, ${users[0].nombres}`}</p>
            </div>
          </div>
        </nav>

      {/* Table */}
      <div className='container is-fluid'>
        <div className='columns'>
          <div className='column is-2'>
            {/* Left side menu */}
            <aside className="menu">
              <p className="menu-label">General</p>
              <ul className="menu-list">
                <li><a>Reportes</a></li>
                <li><a>Registrar usuario</a></li>
              </ul>
            </aside>
          </div>

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
                <tr key={users.rut}>
                  <th>{users[0].rut}</th>
                  <td>{users[0].nombres}</td>
                  <td>{users[0].apellidos}</td>
                  <td>{users[0].correo}</td>
                  <td>{users[0].area}</td>
                  <td>{users[0].cargo}</td>
                  <td>{users[0].tipHorario}</td>
                  <td>{users[0].empresa}</td>
                  <td>{users[0].asistencia}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  ); 
}