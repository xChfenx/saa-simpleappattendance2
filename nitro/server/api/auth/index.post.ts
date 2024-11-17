import { parserLogin } from "~/utils/repositories/schemes/User";
import { findUserByEmail } from "~/utils/repositories/users";

export default eventHandler(async (event) => {
  const body = await readValidatedBody(event, parserLogin);

  const foundUser = await findUserByEmail(body.email);

  if(foundUser){
    if(!matchHashes(body.password, foundUser.clave)){
      throw createError({
        status: 401,
        message: "Credenciales inválidas",
      });
    }
  }
  else {
    throw createError({
      status: 404,
      message: "Usuario no encontrado",
    });
  }

  return foundUser;
});