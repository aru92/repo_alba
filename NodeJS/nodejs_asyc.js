//funciones callback
programaPrincipal();
function programaPrincipal(){
  console.log("programaPrincipal : Comenzado");
//invocamos un proceso, y cuando termine, que avise en A
  funProceso(funCallback_A);
  console.log("programaPrincipal : Haciendo otra cosa")
  funProceso(funCallback_B);
  console.log("programaPrincipal : Terminado");
}
function funCallback_A(){
  console.log("funCallback A : hemos terminado");

}
function funCallback_B(){
  console.log("funCallback B : hemos terminado");

}
//proceso independiente (jQuery, Ajax, módiulo propio..)
function funProceso(funDeAviso){
  console.log("funProceso : comenzando proceso");
  funDeAviso();
  console.log("funProceso : terminando proceso"); 

}