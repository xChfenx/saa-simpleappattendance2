export async function fetchUsers(){
  try {
    const data = await (await fetch('http://localhost:3000/api/users', {
      headers: {
        'Content-Type': 'application/json',
      }

    })).json();

    return data;
  }

  catch (err) {
    console.log('Error de base de datos:', err);
    throw new Error('Falló al obtener los datos');
  }

}