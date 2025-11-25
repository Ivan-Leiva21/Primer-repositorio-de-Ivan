import express from "express";
const rutas = express.Router();
import { formularioContacto } from "../controllers/formularios.controlers.js";
import { validarFormulario } from "../middlewares/validador.middleware.js";

rutas.post("/contacto", validarFormulario, formularioContacto);

//rutas.post("/login");

export { rutas };