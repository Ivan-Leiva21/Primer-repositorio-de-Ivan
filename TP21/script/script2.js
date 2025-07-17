//metodo forEach()

let colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

colores.forEach((valor, i) => {
    console.log(valor, i);
});

let numeros = [1, 2, 3, 4, 5, 6];
numeros.forEach((numero) => {
    console.log(numero * 10);
});

//modificar mediante un forEach()

numeros.forEach((num, i) => {   
    numeros[i] += 100;
});
console.log(numeros);

numeros = numeros.join();
console.log(numeros);
numeros = numeros.split(",");
console.log(numeros);

numeros.forEach((num, i) => {
    numeros[i] = Number(num);
});
console.log(numeros);

// metodo find()

/* let query = colores.find((color) => {
    return color == "verde";
});
console.log(query); */

let query = colores.find(color =>  color == "verde" 
);
console.log(query);

let queryIndex = colores.findIndex(color =>  color == "naranja" 
);
console.log(queryIndex);

// metodo reduce()

let total = numeros.reduce((x, numero)=>{
    return x + numero});
console.log(total);

// array de arrays

let dato = [["ivan", 21], ["joaquin", 20], ["santiago", [24, 20]]];
console.log(dato);
console.log(dato[1][0]);
console.log(dato[2][1][0]);


