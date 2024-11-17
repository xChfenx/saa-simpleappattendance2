'use client';
import { useRouter } from "next/navigation";

export default function Logout(){
    const router = useRouter();
    // const loggedUser = JSON.parse(localStorage.user);
    function handleClick(){
        delete localStorage.user
        router.push("/");
    }
    
    return (
        <div className="hero-foot">
            <div className="section">
                <div className="container">
                    <button className="button is-light" onClick={handleClick}>Cerrar sesión</button>
                </div>
            </div>
        </div>
    );
}