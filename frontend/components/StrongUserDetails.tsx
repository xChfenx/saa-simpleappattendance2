'use client';
export default function StrongUserDetails(){
    const loggedUser = JSON.parse(localStorage.user);

    return (
        <h2 className="subtitle"><strong>{`${loggedUser.nombres} ${loggedUser.apellidos}`}</strong>{`(${loggedUser.rut})`}</h2>
    );
}