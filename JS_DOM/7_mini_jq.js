function generar(){
  elemPorId("div_form").style.backgroundColor = "red";
  adjuntar("nuevo_id_form, etiqueta")
}
function elemPorId(id){
  return document.getElementById(id);
}

function cambiar(){
  cambiaAtribPorId("div_form").style.backgroundColor = "green";
}
function cambiaAtribPorId(id){
  return document.getElementById(id);
}

function adjuntar(id, etiqueta){
  var elem = elemPorId(id);
  var nuevoElem = document.createElement(etiqueta);
  elem.appendChild(nuevoElem);
}