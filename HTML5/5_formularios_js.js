function ponPrimeraMayus(texto){
  var primeraLetra = texto.charAt(0).toUpperCase();
  var resto = texto.substring(1).toLowerCase();
  return primeraLetra + resto;
}

function validar(){

  var inputNombre = document.getElementById("nombre");
  var inputApell_1 = document.getElementById("primer_apellido");
  var inputApell_2 = document.getElementById("segundo_apellido");
  
  var nombre = inputNombre.value;
  var primer_apellido = inputApell_1.value;
  var segundo_apellido = inputApell_2.value;

  validarInput(inputNombre, nombre);
  validarInput(inputApell_1, primer_apellido);
  validarInput(inputApell_2, segundo_apellido);

}
  
function validarInput(inputTexto, texto){
  if(texto ==""){
    inputTexto.style.borderColor="red";
  }else{
    inputTexto.style.borderColor ="";
    inputTexto.value = ponPrimeraMayus(texto);
  }
}
/*
  if(nombre ==""){
    inputNombre.style.borderColor = "cyan";
  }else{
    inputNombre.style.borderColor = "";
    inputNombre.value = ponPrimeraMayus(nombre);
  }
  if (primer_apellido == "") {
    inputApell_1.style.borderColor = "cyan";
  } else {
    inputApell_1.style.borderColor = "";
    inputApell_1.value = ponPrimeraMayus(primer_apellido);
  }

  if (segundo_apellido == "") {
    inputApell_2.style.borderColor = "cyan";
  } else {
    inputApell_2.style.borderColor = "";
    inputApell_2.value = ponPrimeraMayus(segundo_apellido);
  }
}*/