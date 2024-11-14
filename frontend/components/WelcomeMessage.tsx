'use client';
export default function WelcomeMessage(){
    const loggedUser = JSON.parse(localStorage.user);
    
    return (
        <div className="navbar-item is-expanded">
        <div className='container has-text-centered'>
          <p className='title has-text-white'>{`Bienvenido, ${loggedUser.nombres}`}</p>
        </div>
      </div>
    );
}