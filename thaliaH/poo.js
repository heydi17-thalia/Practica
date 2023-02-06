  
  
  
  //MANERA ANTIGUA
  function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//MANERA ACTUAL
class Carro{
      constructor(marca,color,modelo){
            this.marca = marca;
            this.color = color;
            this.modelo = modelo;
      }

     verMarca(){
          console.log(this.marca);
     } 

     cambiarColor(colorNuevo){
          return this.color = colorNuevo;
     }
}

let carro1 = new Carro("Toyota","negro","yaris");
console.log(carro1);

carro1.cambiarColor("Rojo");
console.log(carro1);

  
  
  
  
  

       
