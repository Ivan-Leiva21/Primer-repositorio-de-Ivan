// formulario //

document.querySelector("#agregarForm").addEventListener("click", ()=>{
    //console.log("boton agregar")
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const telefono = document.querySelector("#telefono");
    if(nombre.value === "" || apellido.value == "" || telefono.value == ""){
        return;
    }
    nombre.value == "";
    apellido.value == "";
    telefono.value == "";
    document.querySelector("#vista").innerHTML = `Registros <span>${fichas.lenght}</span>`
    
});
document.querySelector("#vaciarForm").addEventListener("click", ()=>{
    //console.log("boton vaciar")
});
       
// registro  //  


document.querySelector("#mostrarReg").addEventListener("click", ()=>{
    //console.log("boton registro")
    
});

let fichas = [];

class Ficha{
    costructor(nombre, apellido, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = telefono;
    }
}
fichas.push(new Ficha(nombre.value, apellido.value, telefono.value));