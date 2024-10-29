import { redirect } from "next/navigation";

export async function login(formData: FormData){

  const data = await (await fetch('http://localhost:3001/api/users', {
    headers: {
      'Content-Type': 'application/json',
    }

  })).json();

  const user = {
    correo: formData.get('correo'),
    contrasena: formData.get('contrasena'),
  }

  if(user.contrasena === data[0].clave){
    redirect('/dashboard');
  }  
}