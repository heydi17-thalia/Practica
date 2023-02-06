const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];

const signos = ["Aries","Tauro","Geminis","Cancer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"];



const divResultado = document.querySelector("#resultado");  




// DEVUELVE UN NUMERO ALEATORIO DEL 0 AL 11

function numeroAleatorio(){
    return parseInt(Math.random()*12);
} 



// DEVUELVE UN MENSAJE

function mostrarInformacion(meses,signos){
      return `El mes de ${meses[numeroAleatorio()]} corresponde al signo de ${signos[numeroAleatorio()]}`;
}



// limpia el html

export function limpiarHtml(){
    while(divResultado.firstChild){
        divResultado.removeChild(divResultado.firstChild);
    }
}


//CREA EL MENSAJE Y LA IMAGEN 

export function crearHTML(){


    const parrafo = document.createElement("p");
    parrafo.classList.add("mensaje");
    parrafo.textContent = mostrarInformacion(meses,signos);
    divResultado.appendChild(parrafo);

    const imagen = document.createElement("img");
    imagen.src = "../img/Santuario_12.jpg";
    imagen.alt = "santuario";
    imagen.classList.add("imagen-bonita")
    divResultado.appendChild(imagen);


}

