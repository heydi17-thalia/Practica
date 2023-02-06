 


 
const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes"];


//INDEXOF

const indice = dias.indexOf("Jueves");
const indiceA = dias.indexOf("Viernes");
const indiceB = dias.indexOf("Lunes");
// console.log(indice);
// console.log(indiceA);
// console.log(indiceB);



const vocales = ["a","e","i","o","u","u","o","e","i","a"];

const indiceVocal = vocales.indexOf("u");
const indcieVocalV = vocales.indexOf("u",2);
const indcieVocalB = vocales.indexOf("u",4);
const indcieVocalC = vocales.indexOf("u",5);
console.log(indcieVocalB);
console.log(indcieVocalC);


//LASTINDEXOF

const marcas = ["Zara","Dolce & Gabanna","Louis Vuitton","Zara","Calvin Klein","H&M","GAP","GAP","Zara"];

const indiceK = marcas.indexOf("Zara");  //0
const indiceM = marcas.lastIndexOf("Zara"); //8
const indiceJ = marcas.lastIndexOf("GAP");


console.log(indiceK);
console.log(indiceM);

const nombres = ["Camila","Melissa","Arely","Roxana","Meily","Sayuri","Jarumi","Osiris",
                 "Samy","Francis","Maria","Heydi","Dafne","Nicol","Ariana","Yassira","Miriam",
                "Camila","Melissa","Arely","Roxana","Meily","Sayuri","Jarumi","Osiris","Samy",
                "Francis","Maria","Heydi","Dafne","Nicol","Ariana","Yassira","Miriam"]


                const nombreA = nombres.indexOf("Meily");   //4
                const nombreB = nombres.lastIndexOf("Meily");  //21
                
                
                const nombreC = nombres.indexOf("Camila");  //0
                const nombreD = nombres.lastIndexOf("Camila"); //17
                
                const nombreE = nombres.indexOf("dafne"); //-1
                const nombreF = nombres.lastIndexOf("Dafne"); //29
                //INCLUDES


const nombres2 = ["Camila","Melissa","Arely","Roxana","Meily","Sayuri","Jarumi","Osiris",
"Samy","Francis","Maria","Heydi","Dafne","Nicol","Ariana","Yassira","Miriam"];

const nombreEncontrado = nombres2.includes("Nicol");
const nombreEncontrado2 = nombres2.includes("samy");

//FIND


const nombres3 = ["Camila","Melissa","Arely","Roxana","Meily","Sayuri","Jarumi","Osiris",
                 "Samy","Francis","Maria","Heydi","Dafne","Nicol","Ariana","Yassira","Miriam"];


const nombreABuscar =  nombres3.find((nombre)=>{
     return  nombre == "Francis";        
});

const nombreABuscar2 = nombres3.find(nombre=>nombre=="Francis");



const numerosImpares = [1,3,5,7,11,12,20];      

const numeroPar = numerosImpares.find(numero=>{
       if(numero%2==0){
           return numero;
       }
});


const numeroImpar = numerosImpares.find(numero =>{
     if(numero%2 != 0){
          return numero;
     }
});


console.log(numeroPar);
console.log(numeroImpar);


//ACTVIDAD 

const numerosV = [2,6,15,25,45];    //QUIERO EL PRIMER NUMERO QUE SEA MULTIPLO DE 5

const numero5 = numerosImpares.find(numero=>{
    if(numero%5==0){
        return numero;
    }
});

console.log(numero5);

//FINDINDEX


const array1 = [5,12,8,130,44];

const numeroMayorA13 = array1.find(numero =>{
        if(numero>13){
            return numero;
        }
});


const indiceNumeroMayorA13 = array1.findIndex(numero=>{
       if(numero>13){
           return numero;
       }
})


console.log(numeroMayorA13);       //130
console.log(indiceNumeroMayorA13);   //3

//FILTER


const palabras = ["carro","mochila","naranja","libro","presente","pasado"];


const resultado = palabras.filter(palabra=>{
        if(palabra.length>6){
            return palabra;
        }
});

console.log(resultado);


const estudiantes = [
     {
       "nombre": "Kiara",
       "edad": 16 ,
       "hobby": "dormir"
     },
     {
        "nombre": "Camila",
        "edad": 19 ,
        "hobby": "bailar"
     },
     {
        "nombre": "Heydi",
        "edad": 18,
        "hobby": "jugar basket"
     },
     {
        "nombre": "Melissa",
        "edad": 16,
        "hobby": "jugar voley"
     }
]




const mayoresEdad = estudiantes.filter(estudiante=>{
        const {edad} = estudiante;
        if(edad>=18){
            return estudiante;
        }
});

console.log(mayoresEdad[0].nombre);
console.log(mayoresEdad[1].nombre);


const libros = [
    {
        "nombre": "Los ojos de mi princesa",
        "autor" : "Carlos Cuauhtemoc",
        "añoPublicación" : 2004 ,
        "genero": "novela"
    },
    {
        "nombre": "Agua de la vida",
        "autor" : "Sara Gruen",
        "añoPublicación" : 1944 ,
        "genero": "novela"
    },
    {
        "nombre": "Divergente",
        "autor" : "Veronica Roth",
        "añoPublicación" :  2011,
        "genero": "accion"
    },
    {
        "nombre": "Tradiciones Peruanos",
        "autor" : "Ricardo Palma",
        "añoPublicación" : 1872 ,
        "genero": "tradicion"
    },
    {
        "nombre": "Las penas del Joven Wether",
        "autor" : "Johann Wolfgan Von",
        "añoPublicación" : 1872 ,
        "genero": "novela"
    }
]

const librosNovela = libros.filter(libro=>{
      const {genero} = libro;

      if(genero=="novela"){
        return libro;
      }
});

for(const libro of librosNovela){
    console.log(libro.nombre)
}



//ACTIVIDAD

const libros2 = [
    {
        "nombre": "Los ojos de mi princesa",
        "autor" : "Carlos Cuauhtemoc",
        "añoPublicación" : 2004 ,
        "genero": "novela"
    },
    {
        "nombre": "Agua de la vida",
        "autor" : "Sara Gruen",
        "añoPublicación" : 1944 ,
        "genero": "novela"
    },
    {
        "nombre": "Divergente",
        "autor" : "Veronica Roth",
        "añoPublicación" :  2011,
        "genero": "accion"
    },
    {
        "nombre": "Tradiciones Peruanos",
        "autor" : "Ricardo Palma",
        "añoPublicación" : 1872 ,
        "genero": "tradicion"
    },
    {
        "nombre": "Las penas del Joven Wether",
        "autor" : "Johann Wolfgan Von",
        "añoPublicación" : 1872 ,
        "genero": "novela"
    }
]



const libros1900 = [
//
    {
        "nombre": "heydi",
        "autor" : " Johanna Spyri",
        "añoPublicación" : 1880,
        "genero": "cuento"
    },
    {
        "nombre": "Don Quijote de la Mancha",
        "autor" : "miguel de cervantes",
        "añoPublicación" : 1605 ,
        "genero": "novela"
    },
    {
        "nombre": "El celoso extremeño",
        "autor" : "miguel de cervantes",
        "añoPublicación" :  1613,
        "genero": "ficcion"
    },
    {
        "nombre": "Los miserables",
        "autor" : " Victor Hugo",
        "añoPublicación" : 1862 ,
        "genero": "tragedia"
    },
    {
        "nombre": "Nuestra Señora de París",
        "autor" : "Victor Hugo",
        "añoPublicación" : 1831 ,
        "genero": "drama"
    }
]
