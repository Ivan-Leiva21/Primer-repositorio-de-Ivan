let http = require("http");

let PORT = 4000;

http.createServer((req, res)=>{
    if(req.url === "/"){
        res.writeHead(200, "text/html");
        res.write();
        res.end();
    }else if(req.url === "/contactos"){
        res.writeHead(200, "text/html");
        res.write("<h1>Contactos</h1>");
        res.end();
    } 
    else{
        res.writeHead(404, "text/html");
        res.write("<h1>404</h1><div>Direccion Inexistente</div>");
        res.end();
    }
}).listen(PORT);

console.log(`Servidor Activo en http://localhost:${PORT}`);
console.log(`Uptime: ${new Date().toLocaleString("es-AR")}`);