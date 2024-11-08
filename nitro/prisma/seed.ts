import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
const client = new PrismaClient();
/*
(
  async () => {
  try{

    await client.user.createMany({
      data: [
          {
            rut: "18.234.567-8",
            nombres: "María Fernanda",
            apellidos: "González Silva",
            correo: "maria.gonzalez@gmail.com",
            clave: "password123",
            area: "Marketing",
            cargo: "Analista de Marketing Digital",
            tipoHorario: "Flex",
            empresa: "InnovaTech SpA",
            qrCode: "https://innova.tech/qr/18234567-8",
            pin: 1234
        },
        {
            rut: "20.123.456-9",
            nombres: "Pedro Antonio",
            apellidos: "Rodríguez Díaz",
            correo: "pedro.rodriguez@example.com",
            clave: "admin123",
            area: "Contabilidad",
            cargo: "Contador General",
            tipoHorario: "Completo",
            empresa: "Empresarios Unidos Ltda.",
            qrCode: "https://empresarios.cl/qr/20123456-9",
            pin: 5678
        },
        {
            rut: "17.987.654-3",
            nombres: "Sofía Alejandra",
            apellidos: "Torres Muñoz",
            correo: "sofia.torres@hotmail.com",
            clave: "securepass",
            area: "Recursos Humanos",
            cargo: "Jefe de Selección",
            tipoHorario: "Part-time",
            empresa: "Global Corp",
            qrCode: "https://globalcorp.com/qr/17987654-3",
            pin: 9876
        },
        {
            rut: "19.012.345-6",
            nombres: "Diego Alejandro",
            apellidos: "Vargas Ruiz",
            correo: "diego.vargas@outlook.com",
            clave: "password1234",
            area: "Ventas",
            cargo: "Ejecutivo de Cuentas",
            tipoHorario: "Completo",
            empresa: "Comercial Chile",
            qrCode: "https://comercialchile.cl/qr/19012345-6",
            pin: 3456
        },
        {
            rut: "16.789.012-3",
            nombres: "Carolina Isabel",
            apellidos: "Sánchez Ramírez",
            correo: "carolina.sanchez@yahoo.com",
            clave: "mysecurepass",
            area: "Tecnología",
            cargo: "Desarrollador Full Stack",
            tipoHorario: "Flex",
            empresa: "StartUpTech",
            qrCode: "https://startuptech.com/qr/16789012-3",
            pin: 2345
        }
      ]
    });
    
    console.log("Exito");
  }

  catch(error){
    if(error instanceof PrismaClientKnownRequestError){
      if(error.code === 'P2002'){
        console.error('USER ALREADY EXISTS!', error.message);
      }
    }
  }

  finally{
    await client.$disconnect();
  }
  }
)();
*/

(async () => {
  try {
    await client.user.create({
      data: {
        rut: "18.234.567-8",
        nombres: "María Fernanda",
        apellidos: "González Silva",
        correo: "maria.gonzalez@gmail.com",
        clave: "password123",
        area: "Marketing",
        cargo: "Analista de Marketing Digital",
        turno: "Tarde",
        empresa: "InnovaTech SpA",
        qrCode: "https://innova.tech/qr/18234567-8",
        pin: 1234,
        asistencia: {
          create: [
            {
              horaEntrada: "2024-11-07T08:00:00Z",
              horaSalida: "2024-11-07T16:00:00Z",
            },
          ],
        },
      },
    });

    console.log("Exito");
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.error("USER ALREADY EXISTS!", error.message);
      }
    }
  } finally {
    await client.$disconnect();
  }
})();
