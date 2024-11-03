import { PrismaClient } from "@prisma/client";

export const client = new PrismaClient();

client.user.create({
  data: {
    "rut": "12345678-9",
    "nombres": "Juanito",
    "apellidos": "Pérez López",
    "correo": "juanito.perez@example.com",
    "clave": "contraseña123",
    "area": "Desarrollo",
    "cargo": "Programador",
    "tipoHorario": "Completo",
    "empresa": "Ejemplo S.A.",
    "qrCode": "https://ejemplo.com/qr/12345678-9",
    "pin": 1234
  }
});

console.log("Exito");