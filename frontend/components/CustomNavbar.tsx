'use client';

import WelcomeMessage from './WelcomeMessage';

type ChildrenProp<P = unknown> = P & { children: React.ReactNode };

export default function CustomNavbar(){

    const loggedUser = JSON.parse(localStorage.user);

    return (
        <WelcomeMessage user={loggedUser}/>
    );
}