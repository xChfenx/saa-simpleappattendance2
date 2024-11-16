import { fetchUsers } from "@/app/utils/data";
import TableUsers from "./TableUsers";
import { Attendance, User } from "@/app/utils/definitions";

export default async function ShowTableUsers(){
    let users: User[] = await fetchUsers();
    const attendances: Attendance[] = [
      {
        id: 1,
        horaEntrada: new Date("2024-11-16T11:40:00.191Z"),
        horaSalida: new Date("2024-11-16T11:25:00.191Z"),
        fecha: new Date(),
        usuarioRut: "12.345.678-9"
      },
      {
        id: 2,
        horaEntrada: new Date("2024-11-16T11:40:00.191Z"),
        horaSalida: new Date("2024-11-16T11:25:00.191Z"),
        fecha: new Date(),
        usuarioRut: "19.827.189-6"
      },
      {
        id: 3,
        horaEntrada: new Date("2024-11-16T11:40:00.191Z"),
        horaSalida: new Date("2024-11-16T11:25:00.191Z"),
        fecha: new Date(),
        usuarioRut: "19.827.189-6"
      },
      {
        id: 4,
        horaEntrada: new Date("2024-11-16T11:40:00.191Z"),
        horaSalida: new Date("2024-11-16T11:25:00.191Z"),
        fecha: new Date(),
        usuarioRut: "19.827.189-6"
      },
      {
        id: 5,
        horaEntrada: new Date("2024-11-16T11:40:00.191Z"),
        horaSalida: new Date("2024-11-16T11:25:00.191Z"),
        fecha: new Date(),
        usuarioRut: "19.827.189-6"
      }
    ];

  return (
    <TableUsers users={users} attendance={attendances}/>
  );
}