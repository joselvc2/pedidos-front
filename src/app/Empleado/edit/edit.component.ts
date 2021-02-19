import { Component, OnInit } from '@angular/core';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  empleado :Empleado=new Empleado();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.empleado=data;
    })

  }
  Actualizar(empleado:Empleado){
    this.service.updatePersona(empleado)
    .subscribe(data=>{
      this.empleado=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["empleado/listar"]);
    })
  }

}


