const validarContacto =()=>{
 // validar campos vacios 
 let documentos= document.querySelector('#documento');
 let nombres= document.querySelector('#nombres');
 if (documentos.value.length ==0){
    alert('El documento esta vacio. Validalo')
 }
 else if(nombres.value.length == 0){
    alert('El Nombre esta vacio. Validalo')
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