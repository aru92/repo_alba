let unNumero :  number; 

unNumero = 12;
console.log ("Un número" + unNumero);

var unTexto ="Un texto"
console.log(unTexto);
alert(unTexto);

let siOno : boolean = false;

siOno = false;

if (siOno) {
  console.log("Parece que no");
}

let miUnion : number | string | boolean;
miUnion = "puede ser cadena";
miUnion = 3443;
miUnion = unTexto == "Un texto" && unNumero == 12;

interface Tiempo {
  dia: number,
  mes: number,
  anio : number

  mostrar(){
    console.log("Cumpleaños feliz! hoy "+ this.dia + this.mes);
  }
};

class Cumpleanios implements Tiempo{

}

var miCumple : Tiempo = {dia: 18 , mes: 3, anio: 1992}; 
console.log("Cumplo años el "+miCumple.dia + "del "+ miCumple.mes + "de "+ miCumple.anio);