const acudientes=[{
    "id":20,
    "Tipo de Documento": "Cedula",
    "Documento":1037629718,
    "Nombre": "jose luis madrid Londoño",
    "Edad":30,
    "parentesco":"Pápa",
    "Estado":"Activo",
    "N° Telefono":3112716697,
    "Dirreccion": "Calle 34 AA SUR # 100 - 200",
    "Barrio":"Altos de misael"
},

{
    
    "id":21,
    "Tipo de Documento": "Cedula",
    "Documento":103762189,
    "Nombre": "Luis Antonio Correa Zapata",
    "Edad":40,
    "parentesco":"Abuelo",
    "Estado":"Activo",
    "N° Telefono":3002139078,
    "Dirreccion": "Calle 12 AA SUR # 10 - 20",
    "Barrio":"Mirador de tuzan"
}
]
 
for (const acudiente of acudientes) {
    console.log("ID:", acudiente.id);
    console.log("Tipo de Documento:", acudiente["Tipo de Documento"]);
    console.log("Documento:", acudiente.Documento);
    console.log("Nombre:", acudiente.Nombre);
    console.log("Edad:", acudiente.Edad);
    console.log("Parentesco:", acudiente.parentesco);
    console.log("Estado:", acudiente.Estado);
    console.log("N° Telefono:", acudiente["N° Telefono"]);
    console.log("Dirección:", acudiente.Dirreccion);
    console.log("Barrio:", acudiente.Barrio);
    console.log("");
    
}