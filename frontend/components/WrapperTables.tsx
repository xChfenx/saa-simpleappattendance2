import { fetchUsers } from "@/app/utils/data";
import TableUsers from "./TableUsers";
import { User } from "@/app/utils/definitions";

export default async function ShowTableUsers(){
    let users: User[] = await fetchUsers();

  return (
    <TableUsers users={users} />
  );
}