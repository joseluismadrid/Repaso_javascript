const buscarCliente = (dato)=>{
    const documentos = [1010, 1011, 1020, 1030, 1957, 5550];
    const nombres = ['carmen', 'ines', 'juan', 'Daniela', 'Maria', 'janeth'];
    // Agregar el codigo que devuelva el la promesa el nombre solo si
    // el documento existe en javascript;
    const inicio = documentos.indexOf(parseInt(dato));
    let encontrado = false;
    for (let i = 0; i < documentos.length; i++) {
      if (dato == documentos[i]) {
        encontrado = true;
      }
    }
    return new Promise((resolve, reject) => {
      if (inicio !=-1) {
        const nombre=nombres[inicio];
        resolve(nombre);
      } else {
        reject('Dato No Encontrado');
      }
    });
};

document.querySelector('#btnBuscar')
.addEventListener('click',
()=>buscarCliente(document.getElementById('dato').value)
.then(mensaje=>console.log(mensaje))
.catch(error=>console.log(error))
)

// Validar el login del proyecto formativo con una promesa 
// Emplear datos constantes
// dilopezz@sena.edu.co