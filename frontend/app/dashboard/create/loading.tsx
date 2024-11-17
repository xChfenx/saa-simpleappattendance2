export default function Loading(){
    return (
        <div className="section has-background-white">
      <section className='section'></section>
      <div className="container is-max-tablet">
        {/* Títulos y subtítulos */}
        <div className="block">
          <div className="columns">
            <div className="column is-10">
              <h2 className="title is-2 is-skeleton">Crear usuario</h2>
            </div>
          </div>
        </div>
        <div className="block">
          <h4 className="subtitle is-4 is-skeleton">Detalles de usuario</h4>
        </div>
      
       
          {/* RUT y Roles */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label is-skeleton" htmlFor="input_rut">RUT *</label>
                <div className="control">
                  <input id="input_rut" className="input is-skeleton" />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="field">
                <label className="label is-skeleton" htmlFor="select_rol">Rol de usuario *</label>
                <div className="control">
                    <input id="input_rut" className="input is-skeleton" />
                </div>
              </div>
            </div>
          </div>

          {/* Nombres y apellidos */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label is-skeleton" htmlFor='input_nombres'>Nombres * </label>
                <div className="control">
                    <input id="input_nombres" className="input is-skeleton" />
                </div>
              </div>
            </div>

            <div className="column">
                <div className="field">
                <label className="label is-skeleton" htmlFor="input_apellidos">Apellidos * </label>
                <div className="control">
                  <input id="input_apellidos" className="input is-skeleton" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Correo y sueldo base */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label is-skeleton" htmlFor="input_correo">Correo * </label>
                <div className="control">
                  <input id="input_correo" className="input is-skeleton" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label is-skeleton" htmlFor="input_sueldo">Sueldo * </label>
                <div className="control">
                  <input id="input_sueldo" name="sueldo" className="input is-skeleton" />
                </div>
              </div>
            </div>
          </div>

          {/* Cargo y área */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label is-skeleton" htmlFor="input_cargo">Cargo * </label>
                <div className="control">
                  <input id="input_cargo" className="input is-skeleton" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label is-skeleton" htmlFor="input_area">Área * </label>
                <div className="control">
                  <input id="input_area" className="input is-skeleton" />
                </div>
              </div>
            </div>
          </div>

          {/* Empresa */}
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label is-skeleton" htmlFor="input_empresa">Empresa * </label>
                <div className="control">
                  <input id="input_empresa" className="input is-skeleton" />
                </div>
              </div>
            </div>

            {/* Tipo horario */}
            <div className="column">
              <div className="field">
                <label className="label is-skeleton" htmlFor="select_turno">Turno *</label>
                <div className="control">
                <input id="input_empresa" className="input is-skeleton" />
                </div>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-skeleton" >Enrolar usuario</button>
            </div>
            <div className="control">
              <button className="button is-skeleton" >Enrolar usuario</button>
            </div>
          </div>
      </div>
    </div>
    );
}