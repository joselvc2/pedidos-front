import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ProductoListarComponent implements OnInit {

  productos:Producto[];
  constructor(private service:ProductoService,private router:Router) { }

  ngOnInit(): void {
this.service.getProducto().subscribe(data=>{
this.productos=data;
  
});


  }

  Editar(producto:Producto){
localStorage.setItem("id",producto.id.toString());
this.router.navigate(["producto/edit"]);

  }


Delete(producto:Producto) {

  this.service.deleteProducto(producto)
  .subscribe(data=>{
  
    this.productos=this.productos.filter(p=>p!==producto);
    alert("Empleado eliminado");
  })
  }

  Listar(){
    this.router.navigate(["producto/listar"]);
  }
  Nuevo(){

    this.router.navigate(["producto/add"]);
  }

}
