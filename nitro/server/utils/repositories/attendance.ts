import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { FormCreateAttendance } from "./schemes/Attendance";

export async function createAttendance(attendance: FormCreateAttendance){

    try {
      await client.asistencia.create({
        data: attendance,
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

export async function listAttendances(){
  return client.asistencia.findMany();
}