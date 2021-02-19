import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class CategoriaListarComponent implements OnInit {

  categorias:Categoria[];
  constructor(private service:CategoriaService,private router:Router) { }

  ngOnInit(): void {
this.service.getCategoria().subscribe(data=>{
this.categorias=data;
  
});


  }

  Editar(categoria:Categoria){
localStorage.setItem("id",categoria.id.toString());
this.router.navigate(["categoria/edit"]);

  }


Delete(categoria:Categoria) {

  this.service.deleteCategoria(categoria)
  .subscribe(data=>{
  
    this.categorias=this.categorias.filter(p=>p!==categoria);
    alert("Categoria eliminado");
  })
  }

  Listar(){
    this.router.navigate(["categoria/listar"]);
  }
  Nuevo(){

    this.router.navigate(["categoria/add"]);
  }




}
