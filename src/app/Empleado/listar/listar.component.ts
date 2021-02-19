import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService}from '../../service/service.service'
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
empleados:Empleado[];
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
this.service.getPersonas().subscribe(data=>{
this.empleados=data;
  
});


  }

  Editar(empleado:Empleado){
    localStorage.setItem("id",empleado.id.toString());
    this.router.navigate(["empleado/edit"]);

  }


Delete(empleado:Empleado) {

  this.service.deletePersona(empleado)
  .subscribe(data=>{
  
    this.empleados=this.empleados.filter(p=>p!==empleado);
    alert("Empleado eliminado");
  })
  }

  Listar(){
    this.router.navigate(["empleado/listar"]);
  }
  Nuevo(){

    this.router.navigate(["empleado/add"]);
  }



}
