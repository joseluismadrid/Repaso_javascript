const validarContacto =()=>{
 // validar campos vacios 
 let documentos = document.querySelector('#documento');
 let nombres = document.querySelector('#nombres');
 let edad = document.querySelectorAll('#edad');
 let parentesco = document.querySelectorAll('#parentesco');
 let tipoDocumento = document.querySelectorAll('#tipoDocumento');
 let estado = document.querySelectorAll('#estado');
 let telefono = document.querySelectorAll('#telefono');
 let correo = document.querySelectorAll('#correo');
 let direccion = document.querySelectorAll('#direccion');
 let barrio = document.querySelectorAll('#barrio')
 
 if(tipoDocumento.value.length == 0 ){
   alert('No se a seleccionado una opccion. Validalo')
}
 else if(nombres.value.length == 0){
    alert('El Nombre esta vacio. Validalo')
 }
 else if(edad.value.length == 0){
   alert('La edad esta vacio. Validalo')
}
else if(parentesco.value.length == 0){
   alert('El parentesco esta vacio. Validalo')
}
else  if (documentos.value.length ==0){
   alert('El documento esta vacio. Validalo')
}
else if(estado.value.length == 0 ){
   alert('No se a seleccionado una opccion. Validalo')
}
 else{
    alert('Datos enviados correctamente ')
 }
}
const boton = document.querySelector('#btnEnviar')
// Escuchar eventos del boton
boton.addEventListener('click',validarContacto)


// diseña uno de los formularios asignados en su proyecto 
// validadr campos obligatorios con js  subir de git