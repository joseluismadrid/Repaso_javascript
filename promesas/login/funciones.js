const validarInicio = (username, password) => {
  const usuarios = ['Admin1', 'admin2']; // Cambié el nombre de la variable usuario a usuarios
  const claves = [12345, 123456]; // Cambié el nombre de la variable clave a claves
  let visto = false;
  const inicio = usuarios.indexOf(username); // Solo necesitas buscar el índice del usuario
  for (let i = 0; i < usuarios.length; i++) {
    if (username === usuarios[i] && parseInt(password) === claves[i]) { // Comprobación de usuario y contraseña
      visto = true;
    }
  }

  return new Promise((resolve, reject) => {
    if (inicio !== -1 && visto) { // Verifica si el usuario existe y fue visto
      const nombre = claves[inicio];
      resolve('Datos Ingresados Correctamente');
    } else {
      reject('Datos incorectos,Verificalos');
    }
  });
}

document.querySelector('#btnInicio').addEventListener('click', () => {
  const username = document.getElementById('username').value; // Obtener el valor de username
  const password = document.getElementById('password').value; // Obtener el valor de password
  validarInicio(username, password)
    .then(mensaje => alert(mensaje))
    .catch(error => alert(error));
});
