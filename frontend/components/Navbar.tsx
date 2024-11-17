import { useState } from "react";

type ChildrenProp<P = unknown> = P & { children: React.ReactNode };

export default function Navbar({children}: ChildrenProp){

  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

  return (
    <div className="navbar has-background-dark">
      <div className="navbar-brand">
        <a className="navbar-burger burger has-text-white" data-target="navbarMenu" onClick={() => setIsActiveBurger(!isActiveBurger)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className={`navbar-menu has-background-dark ${isActiveBurger ? "is-active" : ""}`}>
        <div className="navbar-end is-flex is-justify-content-flex-end">
          <div className="navbar-item">
            <p className="control">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}