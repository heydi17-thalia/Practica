
//primera forma de crear un objeto
let Persona = {} 
let Usuario = {}
let Cuadrado = {}

//segunda forma de crear un objeto 
let Carro = new Object();
let Mesa = new Object();
let Mochila = new Object();

//primera forma de agregar atributos a un objeto
Persona.nombre = "Juan";
Persona.apellido = "Jimenez";
Persona.dni = "7541521";
Persona.isCasado = false;

console.log(Persona);
console.log(Mesa);

//segundo forma de agregar atributos a un objeto

Mesa ["color"] = "rojo";
Mesa["tamaño"] = 2;

console.log(Mesa);


//

let Computadora = {
    "marca": "Lg",
    "Pantalla": "Full HD",
    "Pulgadas": 16,
    "isNuevo": true
}

//Primera forma de acceder a una llave de mi objeto

// console.log(Computadora.marca);
// console.log(Computadora.Pantalla);
// console.log(Computadora.Pulgadas);
// console.log(Computadora.isNuevo);

//Segunda forma de acceder a una llave de mi objeto

// console.log(Computadora["marca"]);
// console.log(Computadora["Pantalla"]);
// console.log(Computadora["Pulgadas"]);
// console.log(Computadora["isNuevo"]);


//COMO MODIFICAR LAS PROPIEDADES DE UN OBJETO

let Cliente = {
    "id": 001,
    "nombre": "Alan",
    "apellido": "Lopez",
    "dni": 15458412,
    "celular": 945214124
}

console.log(Cliente);

//PRIMERA FORMA 
Cliente.celular = 987654321;
console.log(Cliente);

//SEGUNDA FORMA 
Cliente["nombre"] = "Manuel";
console.log(Cliente);














