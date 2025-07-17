// mochila digital

let mochila = ["capeta", "cartuchera", "libros", "regla"];
console.log("mochila completa", mochila);

// acceder a un item especifico

console.log("el segundo elemento es:",mochila[1]);

// actualizar un item

mochila[2] = "sacapuntas";
console.log("mochila actualizada",mochila);

// largo del array

console.log("tengo", mochila.length, "materiales en mi mochila.");

// seleccionar ultimo item

console.log(" el pimer material es:", mochila[0]);
console.log("el ultimo material es:", mochila[mochila.length - 1]);

// agregar items

mochila.push("marcador");
console.log("mochila despues de agrgar un marcador", mochila);

// quitar items

let itemRemovido = mochila.pop(); // aca se guarda el item removido
console.log("mochila despues de quitar el ultimo item", mochila);

console.log(itemRemovido); // aca se llama al item removido

// vaciar mochila

mochila = [];
console.log(mochila, "mi mochila ahora esta vacia");
