/*Ejercicio 9 */

function Area (radio){
    if (radio <= 0){
        return -1;
    }
    else{
        let total = (3.14)*(radio)*(radio);
        return total;
    }
}

console.log(Area(6));
console.log(Area(-3));