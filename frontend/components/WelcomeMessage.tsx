import dashboard_styles from '@/app/dashboard/page.module.css';

export default function WelcomeMessage({user} : {user:any}){
    
    return (
       
      <nav className={`navbar has-background-dark`}>
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
    );
}