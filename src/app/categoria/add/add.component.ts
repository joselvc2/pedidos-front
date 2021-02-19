import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class CategoriaAddComponent implements OnInit {

  categoria:Categoria=new Categoria();
  constructor(private router:Router, private service:CategoriaService) { }

  ngOnInit() :void {
   
  }

  Guardar(){
    console.log(this.categoria);
    this.service.createCategoria(this.categoria)
    .subscribe(data=>{
      
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["categoria/listar"]);
    })
  }


}
