const loginUser = (dato)=>{
    const user ='Admin'
    const password = 12345

    let visto =false
    if(dato == user){
        visto=true
    }if(dato == password){
        visto =true
    }
    return new Promise((resolve, reject) => {
        if (visto) {
          
          resolve('Datos Encontrados');
        } else {
          reject('Dato No Encontrado');
        }
      });
}
document.querySelector('#btnIngresar')
.addEventListener('click',
()=>loginUser(document.getElementById('dato').value)
.then(mensaje=>console.log(mensaje))
.catch(error=>console.log(error))
)