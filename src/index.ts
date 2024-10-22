import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
    const newUser = await prisma.usuario.create({
        data:{
                rut: '17345417-1',
                nombres: 'alonso',
                apellidos: 'cuevas',
                correo: '',
                clave: '',
                area: '',
                cargo: '',
                tipHorario: '',
                empresa: '',
                asistencia:'',
                qrCode: '',
                pin
        }
    })
}


