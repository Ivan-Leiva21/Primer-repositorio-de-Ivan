document.querySelector("#btnVertical").addEventListener("click", (e) => {
    console.log("boton vertical clickeado");
    document.querySelector("#distribucion").style.flexDirection = "column";
});

document.querySelector("#btnHorizontal").addEventListener("click", (e) => {
    console.log("boton Horizontal clickeado");
    document.querySelector("#distribucion").style.flexDirection = "row";
});

document.querySelector("#btnRojo").addEventListener("click", (e) => {
    console.log("boton Rojo clickeado");
    document.querySelector("body").style.backgroundColor = "red";
});

document.querySelector("#btnVerde").addEventListener("click", (e) => {
    console.log("boton verde clickeado");
    document.querySelector("body").style.backgroundColor = "green";
});

document.querySelector("#btnGrande").addEventListener("click", (e) => {
    console.log("boton grande clickeado");
    // document.querySelector("body").style.fontSize += "5px";
});

document.querySelector("#btnPequeño").addEventListener("click", (e) => {
    console.log("boton pequeño clickeado");

});

document.querySelector("#btnOcultar").addEventListener("click", (e) => {
    console.log("boton ocultar clickeado");

});

document.querySelector("#btnMostrar").addEventListener("click", (e) => {
    console.log("boton mostrar clickeado");

});

document.querySelector("#colorTexto").addEventListener("click", (e) => {
    console.log("change");
    
});

