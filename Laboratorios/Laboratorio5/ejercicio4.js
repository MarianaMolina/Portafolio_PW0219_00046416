/*Ejercicio 4 */

let arreglo = new Array(); 

for (let i = 0; i < 20; i++) {
    arreglo.push(numeroal = (Math.floor(Math.random()*100)+1));
   
}
function Adivina(numero){
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] == numero){
            console.log("has adivinado el numero!");
        }else{
            console.log("gracias por participar")
        }
        
        
    }

}

console.log (Adivina(5));

 

