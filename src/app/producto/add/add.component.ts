import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { Producto } from 'src/app/modelo/producto';
import { Proveedor } from 'src/app/modelo/proveedor';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProductoService } from 'src/app/service/producto.service';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class ProductoAddComponent  implements OnInit {
  producto:Producto=new Producto();
  categorias:Categoria[];
  categoria :Categoria= new Categoria();
  proveedores:Proveedor[];
  proveedor:Proveedor=new Proveedor();
  constructor(private router:Router, private service:ProductoService,
    private serviceCategoria:CategoriaService, private serviceProveedor:ProveedorService) { }

  ngOnInit() :void {
    this.producto.categoria=this.categoria;
    this.producto.proveedor=this.proveedor;
    this.serviceCategoria.getCategoria()
      .subscribe(data=>{this.categorias=data});
      
      this.serviceProveedor.getPersonas()
      .subscribe(data=>{this.proveedores=data});
  }
  
  Guardar(){
    console.log(this.producto);
    this.service.createProducto(this.producto)
    .subscribe(data=>{
      
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["producto/listar"]);
    })
  }

}
