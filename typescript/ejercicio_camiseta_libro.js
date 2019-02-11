var Camiseta = /** @class */ (function () {
    function Camiseta(t, c) {
        this.talla = t;
        this.color = c;
    }
    Camiseta.prototype.mostrar = function () {
        console.log("Producto inserto: Camiseta. Datos\nColor:" + this.color + "\nTalla:" + this.talla + "\nPrecio:" + this.precio);
    };
    return Camiseta;
}());
var Libro = /** @class */ (function () {
    function Libro(ti) {
        this.titulo = ti;
    }
    Libro.prototype.mostrar = function () {
        console.log("Producto inserto: Libro. Datos\nTítulo:" + this.titulo + "\nPrecio:" + this.precio);
    };
    return Libro;
}());
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
var unLibro = new Libro("Cumbres Borrascosas");
unLibro.precio = 90;
unLibro.mostrar();
var unaCami = new Camiseta("XXL", "Morado");
unaCami.precio = 20;
unaCami.mostrar();
