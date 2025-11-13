const express = require("express");

const app = express();

const PORT = 4000;

app.use(express.urlencoded({extended:false}));

app.get("/", (req, res)=>{
    res.send("<h1>Bienvenido a mi Web</h1><a href='/form'>Formulario</a>");
});

app.get("/form", (req, res)=>{
    res.send(`<form action="/form/datos" method="post">
    <input type="text" name="nombre" id="" placeholder="Nombre">
    <input type="text" name="Apellido" id="" placeholder="Apellido">
    <input type="submit" value="Enviar">
</form>`);
})

app.post("/form/datos", (req, res)=>{
    console.log("Post Recibido");
    console.log(req.body);
    res.send("<h2>Formulario Recibido! :o</h2>");
});

app.use((req, res, next)=>{
    res.status(404).send(`<h2>Pagina inexistente! :c</h2>`);
    //next();
});

app.listen(PORT, ()=>{
    console.log(`Aplicacion activa en el puerto: http://localhost:${PORT}`);
})