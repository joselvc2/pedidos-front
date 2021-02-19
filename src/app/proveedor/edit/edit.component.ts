import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/proveedor';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProveedorEditComponent implements OnInit {

  proveedor :Proveedor=new Proveedor();
  constructor(private router:Router, private service:ProveedorService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.proveedor=data;
    })

  }
  Actualizar(proveedor:Proveedor){
    this.service.updatePersona(proveedor)
    .subscribe(data=>{
      this.proveedor=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["proveedor/listar"]);
    })
  }
}
