var listaPersonas

jQuery().ready(function(){
  listaPersonas = new Array();
  jQuery("*").css("border-color", "red");
});

function addPersona(){
  var nuevaPersona = new Object();
  nuevaPersona.nombre = $("#inputNombre").val();
  nuevaPersona.edad = $("#inputEdad").val();
  nuevaPersona.apellido =$("#inputApellido").val();
  nuevaPersona.edad = parseInt(nuevaPersona.edad);
  nuevaPersona.email = $("#inputEmail").get(0).value;

  listaPersonas[listaPersonas.length] = nuevaPersona;
  alert("persona creada:\n"
  + nuevaPersona.nombre +"\n"
  + nuevaPersona.apellido + "\n"
  + nuevaPersona.edad + "\n"
  + nuevaPersona.email);
}

function listarPersonas(){
  $("#divListado").html("<h2>Lista de personas</h2>");

    for(var i = 0; i < listaPersonas.length; i++){
    var persona = listaPersonas[i];
      $("#divListado").html(
      $("#divListado").html()+"<p>Nombre: " + persona.nombre + "Apellido" + persona.apellido +", Edad: "
      + persona.edad +", &lt;" + persona.email+"&gt;</p>");
  }
}

