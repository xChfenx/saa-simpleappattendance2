import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
const client = new PrismaClient();

// Primero se borran todos los registros existentes
(async () => {
  try {
    const registrosBorrados = await Promise.all([await client.usuario.deleteMany({}), await client.rol.deleteMany({})]);

    console.log("Exito borrado: \n", registrosBorrados);

    // Crear los roles: Administrador y Empleado
    const roles = await client.rol.createMany({
      data:[
        {
          id: 1,
          nombre: "Administrador"
        },
        {
          id: 2,
          nombre: "Empleado"
        },
      ]
    });

    // Crear un usuario con rol de Empleado
    const usuario = await client.usuario.create({
      data: {
        "rut": "12.345.678-9",
        "nombres": "María Fernanda",
        "apellidos": "González Silva",
        "correo": "maria.gonzalez@gmail.com",
        "clave": "password123",
        "area": "Marketing",
        "cargo": "Analista de Marketing Digital",
        "turno": "Tarde",
        "empresa": "InnovaTech SpA",
        "qrCode": "https://innova.tech/qr/18234567-8",
        "pin": "1234",
        "sueldo": 300000,
        rolId: 2,
      }
    });

    // Crear una asistencia y asignarla al usuario
    // creado previamente
    const asistencia = await client.asistencia.create({
      data:
      {
        id: 1,
        fecha: new Date(),
        horaEntrada: new Date(),
        horaSalida: new Date(),
        usuarioRut: "12.345.678-9"
      },
    });

    console.log("Exito: \n", roles, asistencia, usuario);
  }

  catch (error){
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.error("Registro ya existente!", error.message);
      }
    }

    else {
      console.error(error);
    } 
  }

  finally {
    await client.$disconnect();
  }
})();