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

document.querySelector("#eventoMouse").addEventListener("mousemove", (e) => {
    console.log("evento mousemove");
    //console.log(e.offsetX + "/" + e.offsetY);
    document.querySelector("#eventoMouse > span").textContent = e.offsetX + "/" + e.offsetY;
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

document.querySelector("#foco").addEventListener("focus", (e) => {
    console.log("evento foco");
    // document.querySelector("#foco").style.background = "cyan";
    e.target.style.background = "green";
});

document.querySelector("#foco").addEventListener("blur", (e) => {
    console.log("evento blur");
    e.target.style.background = "white";
});



