const validarInicio = (username, password) => {
  const usuarios = ['Admin1', 'admin2']; 
  const claves = [12345, 123456]; 
  let visto = false;
  const inicio = usuarios.indexOf(username); 
  for (let i = 0; i < usuarios.length; i++) {
    if (username === usuarios[i] && parseInt(password) === claves[i]) { 
      visto = true;
    }
  }

  return new Promise((resolve, reject) => {
    if (inicio !== -1 && visto) { 
      const nombre = claves[inicio];
      resolve('Datos Ingresados Correctamente');
    } else {
      reject('Datos incorectos,Verificalos');
    }
  });
}

document.querySelector('#btnInicio').addEventListener('click', () => {
  const username = document.getElementById('username').value; 
  const password = document.getElementById('password').value; 
  validarInicio(username, password)
    .then(mensaje => alert(mensaje))
    .catch(error => alert(error));
});
