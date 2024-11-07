import { parserUser } from "~/utils/repositories/schemes/User";

export default eventHandler(async (event) => {

  const newUser = await readValidatedBody(event, parserUser);
  const userCreated = await createUser(newUser);

  if(!userCreated){
    throw createError({
      status: 418,
      message: "User could not be created",
    });
  }

  return {
    status: 201,
    message: 'User created',
  }
  
  
});