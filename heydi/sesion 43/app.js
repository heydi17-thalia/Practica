




//MAP

const numeros = [2,4,5,6,7,8,9];

const numerosCuadrado = numeros.map(numero=>{
          return numero*numero;
}); 
console.log(numerosCuadrado);


const numerosCubo = numeros.map(numero=>{
      return Math.pow(numero,3);
});

//const numerosCubo = numeros.map(numero=>Math.pow(numero,3));


console.log(numerosCubo);


// console.table(numerosCubo);


const palabras = ["hola","presente","pasado","murcielago","covid"];

const nuevasPalabras =  palabras.map(palabra=>{
      return `${palabra} - 19`;  //backticks  alt + 96 
});

console.table(nuevasPalabras);



//REDUCE

const numerosV = [1,2,3,4,5];

console.log(numerosV);

const combinacion = numerosV.reduce((valorAnterior,valorAcumulado)=>{
      return valorAnterior + valorAcumulado;
});

console.log(combinacion);

const frutas = ["sandia","mango","platano","naranja"];

console.log(frutas);

const ensalada = frutas.reduce((valorAnterior,valorAcumulado)=>{
      return  valorAnterior + " "+valorAcumulado;
});

console.log(ensalada);


//REVERSE 

const vocales = ["a","e","i","o","u"];

console.log(vocales);
console.log(vocales.reverse());

//SPLIT

const oracion = "Hola-chicas-como-estan-el-dia-de-hoy";

const codigoOperacion = "Peru-0012-2023";

const oracionSeparada = oracion.split("-");
console.log(oracionSeparada);



const codigoSeparado = codigoOperacion.split("-");

const pais = codigoOperacion.split("-")[0];
const anio = codigoOperacion.split("-")[2];
console.log(codigoOperacion);


for(const elemento of codigoSeparado){
    console.log(elemento);
}
// console.log(pais);
// console.log(anio);


//JOIN

const words = ["Un","triste","tigre"];

const wordsUnido = words.join("-------");

console.log(wordsUnido);


//MAP

const numerosI = [3,5,7,9,11];

const numerosImpares = numerosI.map(numero=>{
          if(numero %2 != 0){
            return numero;
          }
}); 
console.log(numerosImpares);


//REDUCE


console.log(combinacion);
const coloresClaros = ["amarillos","verdes","naranjas","Blanco"];

console.log(coloresClaros);

const coloresOscuros = coloresClaros.reduce((valorAnterior,valorAcumulado)=>{
      return  valorAnterior + " "+valorAcumulado;
});


//REVERSE 

const vocalesAbierta = ["a","e","o"];

console.log(vocalesAbierta);
console.log(vocalesAbierta.reverse());

//SPLIT

const oracionT = "Hola-profesor-que-tenga-una-excelente-tarde";


const oracionSeparadaT = oracion.split("-");
console.log(oracionSeparadaT);

//JOIN

const wordsH= ["Un","triste","gatito"];

const wordsUnidoH = wordsH.join("-------");

console.log(wordsUnidoH);