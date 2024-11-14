import * as v from 'valibot';

const createAttendanceScheme = v.object(
  {
    id: v.pipe(
      v.number(),
      v.integer(),
    ),

    horaEntrada: v.pipe(
      v.string(),
      v.isoTimeSecond(),
    ),

    horaSalida: v.pipe(
      v.string(),
      v.isoTimeSecond(),
    ),

    fecha: v.pipe(
      v.string(),
      v.isoDateTime()
    ),

    usuarioRut: v.pipe(
      v.string(),
      v.minLength(12),
      v.maxLength(12),
    ),
  }
);

export const parserAttendance = v.parser(createAttendanceScheme);

// Custom Types
export type FormCreateAttendance = v.InferInput<typeof createAttendanceScheme>;