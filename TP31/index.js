let http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.write("respuesta de mi servidor :p");
    res.end();
    console.log(req.url);
}).listen(4000); 

console.log("Servido activo en http://localhost:4000");