import { Categoria } from "./categoria";
import { Proveedor } from "./proveedor";

export class Producto {
    id:number;
    nombreProducto:String;
    precioUnitario:number;
    unidadesEnStock:number;
    categoria:Categoria;
    proveedor:Proveedor;
}
