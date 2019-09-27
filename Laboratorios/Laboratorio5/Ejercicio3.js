
/*Ejercicio 3*/ 
function Ocurrencia (arreglo, valor){
    let contador=0;

    for(let i=0; i < arreglo.length; i++){
        if (arreglo [i] === valor){
            contador = contador + 1;
        }
    }
    
    return contador;
}

console.log(Ocurrencia([1,2,2,3,4,5]));