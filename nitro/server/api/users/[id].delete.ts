export default eventHandler(async (event) => {
  const rut = getRouterParam(event, "id");

   if(!await deleteUser(rut)){
    throw createError({
      status: 418,
      message: "User does not exist",
    });
   }

   return null;
});