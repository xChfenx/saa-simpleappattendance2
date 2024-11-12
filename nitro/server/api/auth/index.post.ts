import { parserLogin } from "~/utils/repositories/schemes/User";
import { findUserByEmailAndPassword } from "~/utils/repositories/users";

export default eventHandler(async (event) => {
  const body = await readValidatedBody(event, parserLogin);

  const foundUser = await findUserByEmailAndPassword(body.email, body.password);

  if(!foundUser){
    throw createError({
      status: 401,
      message: "Credenciales inválidas",
    });
  }

  return {
    "success": true,
  }
});