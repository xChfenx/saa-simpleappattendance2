import 'bulma/css/bulma.min.css';
import Link from 'next/link';

export default function CreateUserForm(){
  return (
    <div className="section has-background-white">
      <section className='section'></section>
      <div className="container is-max-tablet">
        {/* Títulos y subtítulos */}
        <div className="block">
          <div className="columns">
            <div className="column is-10">
              <h2 className="title is-2">Crear usuario</h2>
            </div>
          </div>
        </div>
        <div className="block">
          <h4 className="subtitle is-4">Detalles de usuario</h4>
        </div>
      
        <form action="" className='has-background-white'>
          {/* RUT y Roles */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">RUT *</label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
              <label className="label">Rol de usuario *</label>
              <div className="control">
                <div className="select">
                  <select>
                      <option>Empleado</option>
                      <option>Administrador</option>
                  </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nombres y apellidos */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Nombres * </label>
                <div className="control">
                    <input className="input" type="text" placeholder="" />
                </div>
              </div>
            </div>

            <div className="column">
                <div className="field">
                <label className="label">Apellidos * </label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Correo y sueldo base */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Correo * </label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Sueldo * </label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
            </div>
          </div>

          {/* Cargo y área */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Cargo * </label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Área * </label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
            </div>
          </div>

          {/* Empresa */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Empresa * </label>
                <div className="control">
                  <input className="input" type="text" placeholder="" />
                </div>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Enrolar usuario</button>
            </div>
            <div className="control">
              <Link href="/dashboard" className="button is-link is-light" aria-label="delete">Cancelar</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}