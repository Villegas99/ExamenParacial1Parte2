      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */
      


      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */

let btn = document.getElementById("btn_añoshumano").addEventListener("click",calculateDogAge)
function calculateDogAge(e) {
  e.preventDefault()

  let dog_age = parseInt(document.getElementById("edad_humano").value)*7
  document.getElementById("edad_perro").value = dog_age

}

      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */


       let btn3 = document.getElementById("btn_muestra").addEventListener("click",muestradatos)

       function pokemon1 (nombre1,especie1,ataque1,defensa1){
         this.nombre1=nombre1
         this.especie1=especie1
         this.ataque1=ataque1
         this.defensa1=defensa1
 
       }
       
       function pokemon2 (nombre2,especie2,ataque2,defensa2){
         this.nombre2=nombre2
         this.especie2=especie2
         this.ataque2=ataque2
         this.defensa2=defensa2
 
       }
 
       function muestradatos(e){
         e.preventDefault()
 
         let nombre1=document.getElementById("nombre_poke1").value
         let especie1=document.getElementById("especie_poke1").value;
         let ataque1=document.getElementById("ataque_poke1").value;
         let defensa1=document.getElementById("defensa_poke1").value
         let nombre2=document.getElementById("nombre_poke2").value
         let especie2=document.getElementById("especie_poke2").value;
         let ataque2=document.getElementById("ataque_poke2").value;
         let defensa2=document.getElementById("defensa_poke2").value
        }
        
       

       
