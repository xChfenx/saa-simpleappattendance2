import 'bulma/css/bulma.min.css';
import Form from 'next/form';
import Link from 'next/link';
import { FormEvent } from 'react';

export default function CreateUserForm(){

  async function onSubmit(formdata: FormData){
    'use server';
    // const formData = new FormData(event.currentTarget);
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: formdata,
    });

    // Manejar la respuesta
    const data = await response.json();
    // console.log(formdata);
    console.log(data);
  }


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
      
        <form action={onSubmit} className='has-background-white'>
          {/* RUT y Roles */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label" htmlFor="input_rut">RUT *</label>
                <div className="control">
                  <input id="input_rut" name="rut" className="input" type="text" placeholder="12.345.678-9" />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
                <label className="label" htmlFor="select_rol">Rol de usuario *</label>
                <div className="control">
                  <div className="select">
                    <select id="select_rol" name="rol">
                        <option value="empleado">Empleado</option>
                        <option value="administrador">Administrador</option>
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
                <label className="label" htmlFor='input_nombres'>Nombres * </label>
                <div className="control">
                    <input id="input_nombres" name="nombres" className="input" type="text" placeholder="María Fernanda" />
                </div>
              </div>
            </div>

            <div className="column">
                <div className="field">
                <label className="label" htmlFor="input_apellidos">Apellidos * </label>
                <div className="control">
                  <input id="input_apellidos" name="apellidos" className="input" type="text" placeholder="González Silva" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Correo y sueldo base */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label" htmlFor="input_correo">Correo * </label>
                <div className="control">
                  <input id="input_correo"  name="correo" className="input" type="text" placeholder="maria@correo.com" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label" htmlFor="input_sueldo">Sueldo * </label>
                <div className="control">
                  <input id="input_sueldo" name="sueldo" className="input" type="text" placeholder="100000" />
                </div>
              </div>
            </div>
          </div>

          {/* Cargo y área */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label" htmlFor="input_cargo">Cargo * </label>
                <div className="control">
                  <input id="input_cargo" name="cargo" className="input" type="text" placeholder="Analista" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label" htmlFor="input_area">Área * </label>
                <div className="control">
                  <input id="input_area" name="area" className="input" type="text" placeholder="Marketing" />
                </div>
              </div>
            </div>
          </div>

          {/* Empresa */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label" htmlFor="input_empresa">Empresa * </label>
                <div className="control">
                  <input id="input_empresa" name="empresa" className="input" type="text" placeholder="Empresa S.A." />
                </div>
              </div>
            </div>

            {/* Tipo horario */}
            <div className="column">
              <div className="field">
                <label className="label" htmlFor="select_turno">Turno *</label>
                <div className="control">
                  <div className="select">
                    <select id="select_turno" name="turno">
                        <option value="manana">Mañana</option>
                        <option value="tarde">Tarde</option>
                        <option value="noche">Noche</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type='submit'>Enrolar usuario</button>
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