validarContacto = () => {
    //Validar campos vacios
    let documento = document.querySelector('#documento');
    console.log(documento.value);
    let nombres = document.querySelector('#nombres');
    console.log(nombres.value);
    if (documento.value.length == 0){
        alert('El documento está vacio, verifique.');
    }
    else if (nombres.value.length == 0){
        alert('El nombre está vacio, verifique.');
    }
}

//Capturar el objeto al cual se le dará click
const boton = document.querySelector('#btnEnviar');

//Escuchar eventos del botón
boton.addEventListener('click',validarContacto)