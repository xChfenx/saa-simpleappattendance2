import * as v from 'valibot';

const createUserScheme = v.object(
  {
    rut: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(20),
    ),
    nombres: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(20),
    ),
    apellidos: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(20),
    ),
    correo: v.pipe(
      v.string(),
      v.minLength(5),
      v.maxLength(20),
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
      v.maxLength(20),
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