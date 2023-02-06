
class Pila{

    constructor(){
        this.stack = [];
    }
  
    //AGREGAR UN ELEMENTO A LA PILA 

   empilar(elemento){
        this.stack.push(elemento);
        return this.stack;
    }
    
   // QUITAR ELEMENTO DE LA PILA 
   
   desempilar(){
       return this.stack.pop();
   }
 
  /*Retornar el ultimo valor ingresado a la pila ,   
  sin sacarlo de esta*/

  peek(){
     return this.stack[this.stack.length-1]; 
  }

 //Retorna el numero de elementos que tiene la pila

  size(){
      return this.stack.length;
  }

 //Muestra el contenido de la pila
  
 print(){
      console.log(this.stack);
 }

}




let pilaPrueba = new Pila();
pilaPrueba.print();

//USANDO EL METODO EMPILAR
pilaPrueba.empilar("carro"); 
pilaPrueba.empilar("pelota"); 
pilaPrueba.print();

//USANDO EL METODO DESEMPILAR
pilaPrueba.desempilar();
pilaPrueba.print();

//PROBANDO EL METODO PEEK
pilaPrueba.empilar("cometa");
pilaPrueba.empilar("dado");
console.log(pilaPrueba.peek());

//PROBANDO EL METODO SIZE
console.log(pilaPrueba.size());

//PROBANDO EL METODO PRINT
pilaPrueba.print();



