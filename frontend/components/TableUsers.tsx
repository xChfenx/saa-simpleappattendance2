'use client';
import { fetchUsers } from "@/app/utils/data";
import { InfoIcon } from "./icons/InfoIcon";

const users = await fetchUsers();

export default function TableUsers({onShowModal} : {onShowModal: any}){
  return (
    <table className='table is-hoverable is-fullwidth'>
      <thead>
        <tr>
          <th>Asistencia</th>
          <th>RUT</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Correo</th>
          <th>Área</th>
          <th>Cargo</th>
          <th>Turno</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: any) => (
        <tr key={user.rut}>
          <th>
            <button className='button is-light' onClick={() => onShowModal}>
              <span className="icon-text">
                <span className='label is-small'>Ver</span>
                <span className='icon is-small'><InfoIcon /></span>
              </span>
            </button>
          </th>
          <th>{user.rut}</th>
          <td>{user.nombres}</td>
          <td>{user.apellidos}</td>
          <td>{user.correo}</td>
          <td>{user.area}</td>
          <td>{user.cargo}</td>
          <td>{user.turno}</td>
          <td>{user.empresa}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}