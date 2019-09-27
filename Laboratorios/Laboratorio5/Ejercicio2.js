/* Ejercicio 2*/
function Suma_dato(arreglo){
    let total =0;
    let promedio= 0;
    
    for(let i=0; i < arreglo.length; i++){
        total = arreglo[i] + total;
    }

    return total, promedio = total/arreglo.length;
}

console.log(Suma_dato([1,2,3]));
