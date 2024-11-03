import { FormCreateUser } from "./schemes/User";

export async function listUsers(){
	return client.user.findMany();
}

export async function createUser(user: FormCreateUser){
  return client.user.create({
    data: user,
  });
}