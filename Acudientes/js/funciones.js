const validarFormulario = ()=>{    
 var tipoDocumento = document.getElementById('tipoDocumento').value;
 var documento = document.getElementById('documento').value;
 var nombres = document.getElementById('nombres').value;
 var edad = document.getElementById('edad').value;
 var parentesco = document.getElementById('parentesco').value;
 var estado = document.getElementById('estado').value;
 var telefono = document.getElementById('telefono').value;
 var correo = document.getElementById('correo').value;
 var direccion = document.getElementById('direccion').value;
 var barrio = document.getElementById('barrio').value;

 if (tipoDocumento == ''){
   Swal.fire(
      'El  tipo de documento está vacio, verifique',
      '',
      'error'
    )
    return;
}
else{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos enviados correctos',
          showConfirmButton: false,
          timer: 2000
      })

  }
  if (documento == ''){
   Swal.fire(
      'El documento está vacio, verifique',
      '',
      'error'
    )
    return;
}
if (documento.length < 10){
  Swal.fire(
    'El documento esta incomplento, verifique',
    '',
    'error'
  )
  return;
}
else{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos enviados correctos',
          showConfirmButton: false,
          timer: 2000
      })
  }
  if (nombres == ''){
    Swal.fire(
      'El nombre completo está vacio, verifique',
      '',
      'error'
    )
    return;
}else{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos enviados correctos',
          showConfirmButton: false,
          timer: 2000
      })
  }
  
  if (edad== ''){
    Swal.fire(
      'El edad está vacio, verifique',
      '',
      'error'
    )
}else if (edad < 18){
  Swal.fire(
    'Eres menor de edad, verifique',
    '',
    'error'
  )
}else if (edad.length == 1 || edad.length == 3 ){
  Swal.fire(
    'La edad no concuerda, verifique',
    '',
    'error'
  )
  return;
}
else{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos enviados correctos',
          showConfirmButton: false,
          timer: 2000
      })
  }
  if (parentesco == ''){
    Swal.fire(
      'El parentesco  está vacio, verifique',
      '',
      'error'
    )
    return;
}else{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos enviados correctos',
          showConfirmButton: false,
          timer: 2000
      })
  }
  if (estado == ''){
    Swal.fire(
      'El estado está vacio, verifique',
      '',
      'error'
      
    )
    return;
}else{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos enviados correctos',
          showConfirmButton: false,
          timer: 2000
      })
  }if (telefono == ''){
    Swal.fire(
      'El telefono está vacio, verifique',
      '',
      'error'
    )
    return;
// }else if (telefono.length <= 10){
//     Swal.fire(
//       'El telefono son maximo 10, verifique',
//       '',
//       'error'
//     )
//     return;
    }else{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos enviados correctos',
          showConfirmButton: false,
          timer: 2000
      })
  }

  
   if (correo == ''){
    Swal.fire(
      'El correo está vacio, verifique',
      '',
      'error'
    )
    return; 
}else{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos enviados correctos',
          showConfirmButton: false,
          timer: 2000
      })
  }
  if (direccion == ''){
    Swal.fire(
      'El direccion está vacio, verifique',
      '',
      'error'
    )
    return; 
}else{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos enviados correctos',
          showConfirmButton: false,
          timer: 2000
      })
  }
  if (barrio == ''){
    Swal.fire(
      'El barrio está vacio, verifique',
      '',
      'error'
    )
    return; 
}else{
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Datos enviados correctos',
          showConfirmButton: false,
          timer: 2000
      })
  }

}
//Capturar el objeto al cual se le dará click
const boton = document.querySelector('#btnEnviar');

//Escuchar eventos del botón
boton.addEventListener('click',validarFormulario)