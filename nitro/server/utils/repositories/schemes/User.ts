import * as v from 'valibot';

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
    ),
    clave: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(20),
    ),
    area: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(15),
    ),
    cargo: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(40),
    ),
    tipoHorario: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(20),
    ),
    empresa: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(20),
    ),
    qrCode: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(40),
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