// function saludar(nombre){
//     alert("Hola  "+  nombre)
// }
//  function procesarEntradaUsuario(callback){
//     var nombre= prompt("Por favor ingresar tu nombre.")
//     callback(nombre)
//  }
//  procesarEntradaUsuario(saludar)

 /*implementar un codigo donde emple callback.
 Recibir un numero y si el numero es mayor 10
 calcular e imprimir en otra funcion la suma de los 
 numeros del 1 al 100
 */
// function calcularSuma(numero) {    
//     var suma=0;
//     if(numero >10){
//         for(var i = 1; i <=100; i++) {
//             suma += i;
    
//         }  
//         alert("La suma de los numeros del 1 al 100 es: "+suma)      
    
//     }     
    
// }
//     function conteoNumeros(callback) {
//         var numero = parseInt(prompt("ingresa el numero ") )      
        
//         callback(numero)
//     }
//     conteoNumeros(calcularSuma)


//----------------------fetch------------------------------
 /*implementar un codigo donde emple fetch.
 Recibir un numero y si el numero es mayor 10
 calcular e imprimir en otra funcion la suma de los 
 numeros del 1 al 100 
 */
    
 const sumaNumeros = ()=>{
   var numero = parseInt(prompt('Ingresa el numero'));
   var suma=0;
   if (numero >10){
      for (var i = 1; i <= 10; i++) {
        suma+=i;
        
      }
      console.log("La suma de los numeros del 1 al 100 es: "+suma)  
   }
 }