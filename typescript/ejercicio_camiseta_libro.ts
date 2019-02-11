interface Producto{//todo es público
    precio:number;
    mostrar():void;
}

class Camiseta implements Producto{
  private  precio:number;//campo obligatorio
  private  talla:string;
    color:string;
  public  constructor(t,c){
        this.talla=t;
        this.color=c;
    }
  public  mostrar(){//método obligatorio
        console.log("Producto inserto: Camiseta. Datos\nColor:"+this.color+"\nTalla:"+this.talla+"\nPrecio:"+this.precio);
    }
}

//métodos de acceso
//precio es de lectura y escritura
class Libro extends Producto{
    precio:number;
    titulo:string;
    //como crear una construcción heredada, pidiendo datos del hijo y padre
    constructor(ti){
        super (pre, "camiseta");
        this.titulo=ti;
    }
    mostrar(){
        console.log("Producto inserto: Libro. Datos\nTítulo:"+this.titulo+"\nPrecio:"+this.precio);
    }
}



/*class Tienda{
    unProd:IProducto;
    constructor(){
        let entrada:string;
    }
    //comprobación funcionamiento
    entrada="Camiseta";
    pedido(){
        if(this.entrada=="Camiseta"){
            this.unProd=new Camiseta("L","Blanco");
            this.unProd.precio=5;
            this.unProd.mostrar();
        }
        else if(this.entrada=="Libro"){
            this.unProd=new Libro("Cumbres Borrascosas");
            this.unProd.precio=30;
            this.unProd.mostrar();
        }
    }
}*/
let unLibro:Libro=new Libro("Cumbres Borrascosas");
unLibro.precio=90;
unLibro.mostrar();
let unaCami:Camiseta=new Camiseta("XXL","Morado");
unaCami.precio=20;
unaCami.mostrar();


