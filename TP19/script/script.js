// funciones

console.log("hola mundo");

// funciones declaradas 
function hola(nombre){
    console.log("hola " + nombre);
}

hola("ivan");
hola("fede");

// funciones anonimas

const chau = function(nombre){
console.log("chau " + nombre);
}

chau("ivan");

// funciones flecha
const bienvenido = (nombre) => {
    console.log("bienvenido " + nombre);
}

bienvenido("ivan");

// return

// capturar return
let retorno = hola("test de retorno");
console.log(retorno);

// declarar return
function calculo (a, b){
    let suma = a + b;
    return suma;
}

retorno = calculo(2, 7);
console.log(retorno);

// opcion 2
function calculo2(a, b ){
    return a + b;
}

console.log(calculo2(2, 5));

// retorno en funcion flechas
const calculoflecha = (a, b ) => {return a + b}
console.log(calculoflecha(5, 55));

// opcion 2
const calculoflecha2 = (a, b ) => a + b;
console.log(calculoflecha2(8, 55));

// IIFE - Inmediately invoked function expressions

(function iifeprivada(){
    console.log("funcion IIFE privada")
})();

//iifeprivada();

// callbacks
//console.clear();

const sumar = (a, b ) => a + b;
const restar = (a, b ) => a - b;
const dividir = (a, b ) => a / b;
const multiplicar = (a, b ) => a * b;

console.log((10, 7));

const calculadora = (a, b, cb) => cb(a, b);

console.log(calculadora(20, 50, sumar));