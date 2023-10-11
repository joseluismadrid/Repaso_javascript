 proceso1 = async() => {
    let suma1 =0;
    return new Promise((resolve,reject)=> setTimeout(() => {
        for (let i = 0; i<= 5000; i++){
            suma1 += i
        }
        resolve(` Este es el proceso 1 y la suma es ${suma1}`)
    },5000))// Retraso de 5 segundos
   
 }
 proceso2 = async() => {
    let suma2 =0;
    return new Promise((resolve,reject)=> setTimeout(() => {
        for (let i = 0; i<= 20000; i++){
            suma2 += i
        }
        resolve(` Este es el proceso 2 y la suma es ${suma2}`)
    },8000))// Retraso 8 segundos
   
 }
 proceso3 = async() => {
    let suma3 =0;
    return new Promise((resolve,reject)=> setTimeout(() => {
        for (let i = 0; i<= 1000; i++){
            suma3 += i
        }
        resolve(` Este es el proceso 3 y la suma es ${suma3}`)
    },3000))// Retraso 3 segundos
   
 }
 document.querySelector('#btnBuscar')
 .addEventListener('click',()=>{
    proceso1().then(mensaje=> console.log(mensaje))
    proceso2().then(mensaje=> console.log(mensaje))
    proceso3().then(mensaje=> console.log(mensaje))
 })
 // convertir el anterior codigo a funciones sincronicas
 // sin promesas y sin el async