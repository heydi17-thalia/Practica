
const cajaMain = document.querySelector(".main");

obtenerDatos();

function obtenerDatos(){
       fetch('../data/estudiantes.json')
         .then(respuesta => respuesta.json())
         .then(datos => pintarEstudiantes(datos))
}

function pintarEstudiantes(datos){

      const {Estudiantes} = datos;
      
      Estudiantes.forEach( estudiante => {
           const {nombre,avatar} = estudiante;
           
           const sectionEstudiante = document.createElement("section");
           const articuloEstudiante = document.createElement("article");

           const imagenEstudiante = document.createElement("img");
           imagenEstudiante.src = avatar;
           
           const divNombre = document.createElement("div");
           const nombreEstudiante = document.createElement("h4");
           nombreEstudiante.textContent = nombre;

           divNombre.appendChild(nombreEstudiante);

          articuloEstudiante.appendChild(imagenEstudiante);
          articuloEstudiante.appendChild(divNombre);

          sectionEstudiante.appendChild(articuloEstudiante);
          
          cajaMain.appendChild(sectionEstudiante);
      });

     
     
}

