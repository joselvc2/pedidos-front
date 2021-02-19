import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { CategoriaService} from 'src/app/service/categoria.service';
import { Categoria } from 'src/app/modelo/categoria';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { Proveedor } from 'src/app/modelo/proveedor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  producto :Producto=new Producto();
  categorias:Categoria[];
  categoria :Categoria= new Categoria();
  proveedores: Proveedor[];
  constructor(private router:Router, private service:ProductoService,
    private serviceCategoria:CategoriaService, private serviceProveedor:ProveedorService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProductoId(+id)
    .subscribe(data=>{
      this.producto=data;
      console.log(this.producto);
    });

    this.serviceCategoria.getCategoria()
      .subscribe(data=>{this.categorias=data});
      
      this.serviceProveedor.getPersonas()
      .subscribe(data=>{this.proveedores=data});
     
  }
  Actualizar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["producto/listar"]);
    })
  }

}
