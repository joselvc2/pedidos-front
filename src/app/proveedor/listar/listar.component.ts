import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/proveedor';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ProveedorListarComponent implements OnInit {

  proveedores:Proveedor[];
  constructor(private service:ProveedorService,private router:Router) { }

  ngOnInit(): void {
this.service.getPersonas().subscribe(data=>{
this.proveedores=data;
  
});


  }

  Editar(proveedor:Proveedor){
localStorage.setItem("id",proveedor.id.toString());
this.router.navigate(["proveedor/edit"]);

  }


Delete(proveedor:Proveedor) {

  this.service.deletePersona(proveedor)
  .subscribe(data=>{
  
    this.proveedores=this.proveedores.filter(p=>p!==proveedor);
    alert("Proveedor eliminado");
  })
  }

  Listar(){
    this.router.navigate(["proveedor/listar"]);
  }
  Nuevo(){

    this.router.navigate(["proveedor/add"]);
  }


}
