// verificar si esta vinculado regularmente
console.log("hola mundo!");
//

// ejemplo de constructor
let ejemplo = {
    nombre: "ivan",
    apellido: "leiva",      
    nacimientoY: 2003,  
}

function Persona(nombre, apellido, nacimientoY){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimientoY = nacimientoY; 
    this.edad = () => {
        let hoy = new Date();
        return hoy.getFullYear() - this.nacimientoY;
    }
}

const persona1 = new Persona("ivan", "leiva", 2003);

console.log(persona1);

console.log(persona1.edad());