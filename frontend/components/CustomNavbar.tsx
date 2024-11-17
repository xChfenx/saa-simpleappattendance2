'use client';

import WelcomeMessage from './WelcomeMessage';

export default function CustomNavbar(){

    const loggedUser = JSON.parse(localStorage.user);

    return (
        <WelcomeMessage user={loggedUser}/>
    );
}