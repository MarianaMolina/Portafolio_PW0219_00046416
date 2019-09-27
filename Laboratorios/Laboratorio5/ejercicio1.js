/*Ejercicio 1 */

var contadorString = 0;
var contadorNumber = 0;
var contadorBoolean = 0;
var contadorNull   = 0;
var contadorSymbol  = 0;
var contadorUndefined  = 0;

function name(arr){
    for (let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) == 'string'){
            contadorString = (contadorString + 1);

        }
        if(typeof arr[i] == 'number'){
            contadorNumber = (contadorNumber + 1);
            
        }
        if((typeof arr[i]) == 'boolean'){
            contadorBoolean= (contadorBoolean + 1);

        }
        if(typeof arr[i] == 'null'){
            contadorNull = (contadorNull + 1);
        
        }
        if(typeof(arr[i]) == 'symbol'){
            contadorSymbol = (contadorSymbol + 1);
    
        }
        if(typeof(arr[i]) == 'undefined'){
            contadorUndefined  = (contadorUndefined + 1);
        
        }
    }
    console.log("cantidad de String =" + contadorString);
    console.log("/ncantidad de Number =" + contadorNumber);
    console.log("/ncantidad de Boolean =" + contadorBoolean);
    console.log("/ncantidad de Null =" + contadorNull);
    console.log("/ncantidad de Symbol =" + contadorSymbol);
    console.log("/ncantidad de Undefined =" + contadorUndefined);

}

console.log(name([6.8,'web',9, undefined, null]));