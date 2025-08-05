console.log(window);
console.log(document);

console.clear();

console.log(document.querySelector("h1"));

console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByClassName("parrafo"));
console.log(document.getElementById("contenidoPrincipal"));

console.log(document.querySelectorAll("p"));

console.log(document.querySelectorAll(".parrafo"));

console.log(document.querySelector("#contenidoPrincipal"));

console.clear();

console.log(document.querySelector("main h2").textContent);

console.log(document.querySelector("main h2").textContent = "nuevo titulo desde js");

console.log(document.querySelector("#contenidoPrincipal").textContent += " - modificado desde js");

console.log(document.querySelector("main").innerHTML += '<p class="parrafo">parrafo 5</p>');

