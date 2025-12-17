import express from "express";
import { validarFormulario } from "../middlewares/validador.middleware.js";
const rutas = express.Router();

rutas.post("/preinscripion", validarFormulario);

export { rutas };