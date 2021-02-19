import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  categoria :Categoria=new Categoria();
  constructor(private router:Router, private service:CategoriaService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getCategoriaId(+id)
    .subscribe(data=>{
      this.categoria=data;
    })

  }
  Actualizar(categoria:Categoria){
    this.service.updateCategoria(categoria)
    .subscribe(data=>{
      this.categoria=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["categoria/listar"]);
    })
  }

}
