const proceso1 = () => {
    let suma1 =0;    
        for (let i = 0; i<= 50; i++){
            suma1 += i
        }
        return(` Este es el proceso 1 y la suma es ${suma1}`)

   
 }
 const proceso2 = () => {
    let suma2 =0;   
        for (let i = 0; i<= 20; i++){
            suma2 += i
        }
        return(` Este es el proceso 2 y la suma es ${suma2}`)
    
   
 }
 const proceso3 = () => {
    let suma3 =0;
    
        for (let i = 0; i<= 10; i++){
            suma3 += i
        }
       return (` Este es el proceso 3 y la suma es ${suma3}`)
   
   
 }
 document.querySelector('#btnBuscar')
 .addEventListener('click',()=>{
   console.log(proceso1())
   console.log(proceso2())
   console.log(proceso3())
 })


 // dadas 4 listas de documentos implementar una funcion async
 // por cada lista para buscar un documento si el documento
 // esta devolver en contrado