document.getElementById('btnEnviar').addEventListener('click', function(event) {
 event.preventDefault();
 
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

 if (tipoDocumento === '0') {
    alert('Por favor, seleccione un tipo de documento.');
    return;
 }

 if (documento === '') {
    alert('Por favor, ingrese el número de documento.');
    return;
 }

 if (nombres === '') {
    alert('Por favor, ingrese el nombre completo.');
    return;
 }

 if (edad === '') {
    alert('Por favor, ingrese la edad.');
    return;
 }

 if (parentesco === '') {
    alert('Por favor, ingrese el parentesco.');
    return;
 }

 if (estado === '') {
    alert('Por favor, seleccione un estado.');
    return;
 }

 if (telefono === '') {
    alert('Por favor, ingrese el número de teléfono.');
    return;
 }

 if (correo === '') {
    alert('Por favor, ingrese el correo electrónico.');
    return;
 }

 if (direccion === '') {
      alert('Por favor, ingrese la dirección.');
      return;
   }
});