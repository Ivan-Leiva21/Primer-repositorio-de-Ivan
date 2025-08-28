document.querySelector("#saludar").addEventListener("click", () => {
    //console.log("saludo");
    const nombre = document.querySelector("#nombre");
    const mensaje = document.querySelector("#saludar #resultado");
    //console.log(nombre.value);
    if(nombre.value === ""){
        //console.log("input vacio")
        // mensaje.textContent = "Error! escriba su nombre en el input";
        mensaje.textContent = "Error! escriba su nombre en el input";
    }else{
        //console.log("input con info: " + nombre.value);
        mensaje.innerHTML = "Hola " + nombre.value
    }
});

// document.querySelector("#calcular").addEventListener("click", () => {
//     console.log("saludo");
//     const cantidad = document.querySelector("#cantidad");
//     const mensaje = document.querySelector("#ingredientes #resultado");
//     const papas = 500;
//     const leche = 100;
//     const manteca = 30;
//     const huevo = 1;
//     //console.log(nombre.value);
//     if(cantidad.value === " "){
//         //console.log("input vacio")
//         mensaje.textContent = "Error! escriba una cantidad en el input";
//     }else{
//         //console.log("input con info: " + nombre.value);
//         mensaje.innerHTML = `<span class="lista">
//         <span>Cantidad de ingredientes</span>
//         <span>$(papas * cantidad.value) grms de papas</span>
//         <span>$(leche * cantidad.value) grms de papas</span>
//         <span>$(manteca * cantidad.value) grms de papas</span>
//         <span>$(huevo * cantidad.value) grms de papas</span>
//         </span>`;
//     }
// });

let asistentes = [];

document.querySelector("#agregar").addEventListener("click", () => {
    //console.log("boton agregar clickeado");
    const asistente = document.querySelector("#asistentes");
    if(asistente.value === ""){
        mensaje1.textContent = "Error! ingrese su nombre en el input";
    }else{
        asistentes.push(asistente.value);
        mensaje1.textContent = "...respuesta";
    }
    
    asistente.value = "";

});

document.querySelector("#ver").addEventListener("click", () => {
    // console.log("boton ver clickeado");
    document.querySelector("#listaAsistencia #mensaje");
    // mensaje1.textContent = asistentes;
    mensaje1.textContent = "";
    if(asistentes.length === 0){
        mensaje1.textContent = "Error! no hay nombres guardados"
    }else{
         asistentes.forEach((nombre, i) => {
        // console.log(nombre);
        i++;
        mensaje1.innerHTML += `<div>${i} - ${nombre}</div>`;
    });
    }
   
});


