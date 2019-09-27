/*Ejercicio 7*/
function Fibo (numero){
    let arreglo = [0,1];
    let contador =0;

    for(let i=2; i < arreglo[numero]; i++){
        contador = (arreglo[i-1]) + (arreglo[i-2]);
        arreglo[i] = arreglo.push( contador); 
    }

    return arrreglo;
}

console.log(Fibo(5));