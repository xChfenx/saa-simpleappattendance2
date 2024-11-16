'use client';
import { useRef, useState } from "react";
import { InfoIcon } from "./icons/InfoIcon";
import { Attendance, User } from "@/app/utils/definitions";

export default function TableUsers({ users, attendance} : {users: User[]; attendance: Attendance[]; }){

  const [switchTable, setSwitchTable] = useState(1);
  const refRut = useRef("");

  if(switchTable === 1){
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
          {users.map((user: User) => (
          <tr key={user.rut}>
            <th>
              
              <button onClick={() => {
                refRut.current = user.rut;
                setSwitchTable(2);
              }} className='button is-light' >
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

  if(switchTable === 2){
    return (
      <table className='table is-hoverable is-fullwidth'>
        <thead>
          <tr>
            <th>Detalles cuenta</th>
            <th>RUT</th>
            <th>Fecha</th>
            <th>Hora entrada</th>
            <th>Hora salida</th>
            <th>Atraso</th>
            <th>Horas totales</th>
          </tr>
        </thead>
        <tbody>
          
          {(attendance.filter(
            (attendanceByRut) => attendanceByRut.usuarioRut === refRut.current)
            ).map((attendance: Attendance) => (
          <tr key={attendance.id}>
            <th>
              
              <button onClick={() => setSwitchTable(1)} className='button is-light' >
                <span className="icon-text">
                  <span className='label is-small'>Volver</span>
                  <span className='icon is-small'><InfoIcon /></span>
                </span>
              </button>
            </th>
            {/* RUT */}
            <th>{attendance.usuarioRut}</th>
            {/* Fecha */}
            <td>
              {`
                ${attendance.fecha.toLocaleDateString()}
              `}
            </td>
            {/* Hora entrada */}
            <td>
              {`
                ${attendance.horaEntrada.getHours().toString().padStart(2, "0")}:
                ${attendance.horaEntrada.getMinutes().toString().padStart(2, "0")}:
                ${attendance.horaEntrada.getSeconds().toString().padStart(2, "0")}
              `}
            </td>
            {/* Hora salida */}
            <td>
              {`
                ${attendance.horaSalida.getHours().toString().padStart(2, "0")}:
                ${attendance.horaSalida.getMinutes().toString().padStart(2, "0")}:
                ${attendance.horaSalida.getSeconds().toString().padStart(2, "0")}
              `}
            </td>
            {/* Atraso */}
            <td>
              
            </td>
            {/* Horas totales */}
            <td>
              
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    );
  }
}