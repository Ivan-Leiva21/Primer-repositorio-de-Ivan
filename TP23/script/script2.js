document.querySelector("#botonSaludar").addEventListener("click", (e) => {
    console.log("hola mundo!");
    console.log(e);
});

document.querySelector("#eventoMouse").addEventListener("click", (e) => {
    console.log("evento click");
});

document.querySelector("#eventoMouse").addEventListener("mouseover", (e) => {
    console.log("hola");
});

document.querySelector("#eventoMouse").addEventListener("mouseout", (e) => {
    console.log("chau")
});

document.querySelector("#eventoMouse").addEventListener("dblclick", (e) => {
    console.log("auch");
});

document.querySelector("#eventosTecla1").addEventListener("keydown", (e) => {
    console.log("evento keydown");
});
document.querySelector("#eventosTecla1").addEventListener("keyup", (e) => {
    console.log("evento keyup");
});

document.querySelector("#eventosTecla2").addEventListener("keypress", (e) => {
    console.log(e.key);
});
