import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { FormCreateUser } from "./schemes/User";
import { Rol } from "@prisma/client";

export async function listUsers(){
	return client.usuario.findMany();
}

export async function createUser(user: FormCreateUser){

  try {
    await client.usuario.create({
      data: user,
    });
  }

  catch(error){
    if(error instanceof PrismaClientKnownRequestError){
      if(error.code === 'P2002'){
        return false;
      }
    }

    throw error;
  }

  return true;
}

export async function deleteUser(rut: string | undefined){
  try {
    await client.usuario.delete({
      where: {
        rut: rut
      }
    });
  }

  catch(error){
    if(error instanceof PrismaClientKnownRequestError){
      if(error.code === 'P2025'){
        return false;
      }
    }

    throw error;
  }

  return true;
}

export async function findUserByEmailAndPassword(email: string, password: string){
  try {
    await client.usuario.findFirstOrThrow({
      where: {
        correo: email,
        clave: password,
      }
    });
  }

  catch(error){
    if(error instanceof PrismaClientKnownRequestError){
      if(error.code === 'P2025'){
        return false;
      }
    }

    throw error;
  }

  return true;
}