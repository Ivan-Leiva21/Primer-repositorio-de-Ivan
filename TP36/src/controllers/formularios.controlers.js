import { insertDatosFormulario } from "../services/formularios.services.js";

export const formularioContacto = async (req, res)=>{
    console.log("--> Formulario contacto iniciado")
    const resp = await insertDatosFormulario(req.body);
    if(resp.error){
        // res.send(`<h2>Error al grabar los datos: ${resp.msg}</h2>`);
        res.redirect("/contacto.html?error=Error al grabar los datos en BD");
        return;
    }else{
        res.send("<h2>datos grabados exitosamente</h2>");
        return;
    };
};
