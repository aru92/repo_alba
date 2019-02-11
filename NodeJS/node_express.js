"use strict";
var miExpress = require("express");
var app = miExpress();
//function alResponder (request, response) con funciones anónimas de ES6.Función callback
var alResponder = (request, response) => {
  console.log("Acceso a la petición, ", request.originalUrl);
  response.send("Ruta: " + request.originalUrl + "  Verbo: " + request.method);
}
app.get("/", alResponder);
app.post("/", alResponder);
app.delete("/", alResponder);
app.all("/paratodos", alResponder);
app.all("/enotrolado", alResponder);
app.listen(9000);
console.log("Servidor express lanzado."); 