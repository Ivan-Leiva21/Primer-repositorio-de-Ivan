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
