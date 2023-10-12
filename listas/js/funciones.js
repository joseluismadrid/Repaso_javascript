// dadas 4 listas de documentos implementar una funcion async
 // por cada lista para buscar un documento si el documento
 // esta devolver encontrado
   const lista1=[1037629740,1037629741,1027629718,]
   const lista2=[1057629718,1031129718,1030029718]
   const lista3=[1037621218,97629718,87629718]
   const lista4=[8214662,1037629718,1037629729]
 
 let documento = document.querySelector('#documento');
 
 const buscarLista1 = async () => {
     return new Promise((resolve, reject) => {
         if (lista1.includes(parseInt(documento.value))) {
             resolve('Encontrado en la lista N° 1');
         } else {
             reject('Dato no encontrado en la lista N° 1');
         }
     });
 };
 
 const buscarLista2 = async () => {
     return new Promise((resolve, reject) => {
         if (lista2.includes(parseInt(documento.value))) {
             resolve('Encontrado en la lista 2');
         } else {
             reject('Dato no encontrado en la lista N° 2');
         }
     });
 };
 
 const buscarLista3 = async () => {
     return new Promise((resolve, reject) => {
         if (lista3.includes(parseInt(documento.value))) {
             resolve('Encontrado en la lista N° 3');
         } else {
             reject('Dato no encontrado en la lista N° 3');
         }
     });
 };
 
 const buscarLista4 = async () => {
     return new Promise((resolve, reject) => {
         if (lista4.includes(parseInt(documento.value))) {
             resolve('Encontrado en la lista N° 4');
         } else {
             reject('Dato no encontrado en la lista N° 4');
         }
     });
 };
 
 document.querySelector('#btnBuscar').addEventListener('click', () => {
     buscarLista1()
         .then((mensaje) => console.log(mensaje))
         .catch((error) => console.log(error));
     buscarLista2()
         .then((mensaje) => console.log(mensaje))
         .catch((error) => console.log(error));
     buscarLista3()
         .then((mensaje) => console.log(mensaje))
         .catch((error) => console.log(error));
     buscarLista4()
         .then((mensaje) => console.log(mensaje))
         .catch((error) => console.log(error));
 });
 