import express from "express";
const app = express();
const PORT = 4000;

import rutas from "./src/routes/site.routes.js";

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));

app.use("/", rutas);

app.use((req, res, next)=>{
    res.status(404).send(`<h1>no se pudo encontrar esa pagina!</h1>`);
});

app.listen(PORT, ()=>{
    console.log(`servidor activo en puerto: http://localhost:${PORT}`)
});