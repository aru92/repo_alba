/*Ejercicio:
1-Validar que el usuario introduzca un email y contraseña
1.1 Marcar en rojo los campos que no sean rellenados
2-Comprobar que sean iguales entre sí
2.1 Marcar en verde cuando sean iguales
2.2 En naranja cuando no
3 Cuando esté correcto, indicar "Registrado con éxito" 
y el fondo de table, en verde 

 */
function validarInputById(id){ 

  var input = document.getElementById(id);
  var textoInput = input.value;

  if(textoInput == ""){
    input.style.borderColor = "red";
  }else{
    input.style.borderColor =""
  }

  

}