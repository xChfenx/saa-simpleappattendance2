import * as v from 'valibot';

enum Rol {
  Empleado = 'Empleado',
  Administrador = 'Administrador',
}

enum TipoHorario {
  Mañana = 'Mañana',
  Tarde = 'Tarde',
  Noche = 'Noche',
}

const createUserScheme = v.object(
  {
    rut: v.pipe(
      v.string(),
      v.minLength(12),
      v.maxLength(12),
    ),

    rol: v.enum(Rol),

    nombres: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(40),
    ),

    apellidos: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(40),
    ),

    correo: v.pipe(
      v.string(),
      v.email(),
    ),

    sueldo: v.optional(
      v.pipe(
        v.number(),
        v.integer(),
      )
    ),

    cargo: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(40),
    ),

    area: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(15),
    ),

    empresa: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(20),
    ),

    tipoHorario: v.enum(TipoHorario),

    qrCode: v.optional(
      v.pipe(
        v.string(),
        v.minLength(5),
        v.maxLength(40),
      )
    ),
    
    clave: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(20),
    ),
    
    pin: v.pipe(
      v.number(),
      v.integer(),
    )
  }
);


export const parserUser = v.parser(createUserScheme);

// Custom Types
export type FormCreateUser = v.InferInput<typeof createUserScheme>;