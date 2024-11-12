export default eventHandler(async (event) => {

  const rut = getRouterParam(event, 'rut');
  const foundUser = await findUserByRUT(rut);

  if(!foundUser){
    throw createError({
      status: 404,
      message: "RUT no encontrado",
    });
  }

  return foundUser;
});