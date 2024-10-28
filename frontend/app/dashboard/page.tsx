import 'bulma/css/bulma.min.css';
import dashboard from '@/app/dashboard/page.module.css';

import { fetchUsers } from '../lib/data';

export default async function Dashboard(){

  const users = await (await fetchUsers()).json();

  return (
    <>
      <nav className={`navbar is-fixed-top ${dashboard.navbar}`}>
        <div className={'navbar-brand'}>
          <h3 className={'title is-3 has-text-grey-lighter'}>Bienvenido, {users[0].nombres}</h3>
        </div>
        
      </nav>
    </>
  ); 
}