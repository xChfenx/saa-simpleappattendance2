import 'bulma/css/bulma.min.css';

import { fetchUsers } from '../utils/data';

export default async function Dashboard(){

  const users = await fetchUsers();

  return (
    <>
      Bienvenido, {users[0].nombres}        
    </>
  ); 
}