import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/modelo/proveedor';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class ProveedorAddComponent implements OnInit {

  proveedor:Proveedor=new Proveedor();
  constructor(private router:Router, private service:ProveedorService) { }

  ngOnInit() :void {
   
  }

  Guardar(){
    console.log(this.proveedor);
    this.service.createPersona(this.proveedor)
    .subscribe(data=>{
      
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["proveedor/listar"]);
    })
  }

}
