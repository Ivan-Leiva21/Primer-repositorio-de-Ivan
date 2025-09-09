class Persona{
    constructor(nombre, apellido, nacimientoY){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimientoY = nacimientoY;
    }
    saludar(){
        return `hola ${this.nombre}`;
    }
}

const persona1 = new Persona("ivan", "leiva", 2003);

// console.log(persona1);
console.log(persona1.saludar()); 

////////////////////////////////////////////////////////

console.clear();

class Animal{
    constructor(nombre, color, altura, peso, region){
        this.nombre = nombre;
        this.color = color;
        this.altura = altura;
        this.peso = peso;
        this.region = region;
    }
}

let animales = []

animales.push(new Animal("elefante", "gris", 3000, 800, "asia"));
animales.push(new Animal("vaca", "negro", 2000, 400, "asia"));
animales.push(new Animal("caballo", "blanco", 1000, 350, "america"));
animales.push(new Animal("perro", "negro", 100, 150, "america"));
animales.push(new Animal("pajaro", "verde", 50, 30, "america"));

console.log(animales);

// metodo find()

function buscarAnimal(nombre){
    return animales.find(info => info.nombre === nombre);  // funcion flecha de un solo parametro sin llaves o parentesis
}

console.log(buscarAnimal("elefante"));
console.log(buscarAnimal("vaca"));
console.log(buscarAnimal("caballo"));
console.log(buscarAnimal("perro"));
console.log(buscarAnimal("pajaro"));

console.clear();

// metodo filter()

function filtrarAnimales(region){
    return animales.filter(info => info.region === region);
}

console.log(filtrarAnimales("america"));