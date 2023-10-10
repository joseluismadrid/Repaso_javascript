const buscarCliente = (dato)=>{
    const documentos = [1010,1011,1020,1030,1957,5550]
    let encontrado =false
    for (let i = 0; i < documentos.length; i++){
        if (dato == documentos[i]){
            encontrado=true
        }
    }
    console.log(encontrado)
}
document.querySelector('#btnBuscar')
.addEventListener('click',()=>buscarCliente(document.getElementById('dato').value))