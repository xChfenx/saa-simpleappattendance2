import { parserAttendance } from "~/utils/repositories/schemes/Attendance";

export default eventHandler(async (event) => {

//   const newAttendance = await readValidatedBody(event, parserAttendance);
const newAttendance = await readBody(event);
  const attendanceCreated = await createAttendance(newAttendance);

  if(!attendanceCreated){
    throw createError({
      status: 418,
      message: "Attendance could not be created",
    });
  }

  return {
    status: 201,
    message: 'Attendance created',
  }
  
  
});