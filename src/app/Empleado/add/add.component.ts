import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService}from '../../service/service.service'
import { Empleado } from 'src/app/modelo/empleado';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  empleado:Empleado=new Empleado();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() :void {
   
  }

  Guardar(){
    console.log(this.empleado);
    this.service.createPersona(this.empleado)
    .subscribe(data=>{
      
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["empleado/listar"]);
    })
  }

}
