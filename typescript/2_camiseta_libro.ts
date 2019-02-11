interface IProducto{
    precio:number;
    mostrar();
}

class Camiseta implements IProducto{
    precio:number;
    talla:string;
    color:string;
    constructor(t,c){
        this.talla=t;
        this.color=c;
    }
    mostrar(){
        console.log("Producto inserto: Camiseta. Datos\nColor:"+this.color+"\nTalla:"+this.talla+"\nPrecio:"+this.precio);
    }
}
class Libro implements IProducto{
    precio:number;
    titulo:string;
    constructor(ti){
        this.titulo=ti;
    }
    mostrar(){
        console.log("Producto inserto: Libro. Datos\nTítulo:"+this.titulo+"\nPrecio:"+this.precio);
    }
}

class Tienda{
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
}