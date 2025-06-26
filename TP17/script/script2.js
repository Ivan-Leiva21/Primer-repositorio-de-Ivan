let miVariable = "pagina re masa";

console.log(miVariable);

miVariable = 558;

console.log(miVariable);

const apellido = "leiva";
console.log(apellido);

/* apellido = "gonzales";
console.log(apellido); */

const nombre = "ivan";

console.log(nombre, apellido);

const nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

/* const dni = window.prompt("ingrese su DNI");
console.log(dni); */

let numeroA = 6;
let numeroB = 4;
let suma = numeroA +numeroB;
console.log(suma);

/* let numeroC = window.prompt("primer numero");
numeroC = Number(numeroC); //parse
let numeroD = window.prompt("segundo numero");
numeroD = Number(numeroD);
let sumaCD = numeroC + numeroD;
console.log(sumaCD); */

//scoope

let numeroX = 12;
console.log(numeroX);
let numeroY = 20;
{
    let numeroX = 13;
    console.log(numeroX);
    console.log(numeroY);    
}

console.log(numeroX);
