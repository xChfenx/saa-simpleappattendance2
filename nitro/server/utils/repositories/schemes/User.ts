import * as v from 'valibot';

enum Rol {
  Administrador = 1,
  Empleado = 2,
}

enum Turno {
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
      v.minLength(10),
      v.maxLength(50)
    ),

    sueldo: v.pipe(
        v.number(),
        v.minValue(0),
        v.maxValue(5000000)
      ),

    cargo: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(40),
    ),

    area: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(40),
    ),

    empresa: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(40),
    ),

    turno: v.enum(Turno),
    rolId: v.enum(Rol),

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
      v.string(),
      v.regex(/^\d\d\d\d$/)
    )
  }
);

const loginScheme = v.object(
  {
    email: v.pipe(
      v.string(),
      v.email()
    ),

    password: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(20),
    )
  }
);


export const parserUser = v.parser(createUserScheme);
export const parserLogin = v.parser(loginScheme);

// Custom Types
export type FormCreateUser = v.InferInput<typeof createUserScheme>;