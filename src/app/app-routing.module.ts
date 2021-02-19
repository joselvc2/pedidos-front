import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './empleado/listar/listar.component';
import { AddComponent } from './empleado/add/add.component';
import { EditComponent } from './empleado/edit/edit.component';

import { ProveedorListarComponent } from './proveedor/listar/listar.component';
import { ProveedorAddComponent } from './proveedor/add/add.component';
import { ProveedorEditComponent } from './proveedor/edit/edit.component';
import { CategoriaListarComponent } from './categoria/listar/listar.component';
import { CategoriaAddComponent } from './categoria/add/add.component';
import { CategoriaEditComponent } from './categoria/edit/edit.component';
import { ProductoListarComponent } from './producto/listar/listar.component';
import { ProductoAddComponent } from './producto/add/add.component';
import { ProductoEditComponent } from './producto/edit/edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'empleado/listar'},
  {path:'empleado/listar',component:ListarComponent},
  {path:'empleado/add',component:AddComponent},
  {path:'empleado/edit',component:EditComponent},
  {path:'proveedor/listar',component:ProveedorListarComponent},
  {path:'proveedor/add',component:ProveedorAddComponent},
  {path:'proveedor/edit',component:ProveedorEditComponent},
  {path:'categoria/listar',component:CategoriaListarComponent},
  {path:'categoria/add',component:CategoriaAddComponent},
  {path:'categoria/edit',component:CategoriaEditComponent},  
  {path:'producto/listar',component:ProductoListarComponent},
  {path:'producto/add',component:ProductoAddComponent},
  {path:'producto/edit',component:ProductoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
