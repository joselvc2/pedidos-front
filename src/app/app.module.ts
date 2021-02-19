import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './empleado/listar/listar.component';
import { AddComponent } from './empleado/add/add.component';
import { EditComponent } from './empleado/edit/edit.component';
import {FormsModule}from '@angular/forms';
import{ ServiceService }from  './service/service.service';
import{HttpClientModule}from  '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ProveedorEditComponent } from './proveedor/edit/edit.component';
import { ProveedorListarComponent } from './proveedor/listar/listar.component';
import { ProveedorAddComponent } from './proveedor/add/add.component';
import { CategoriaAddComponent } from './categoria/add/add.component';
import { CategoriaListarComponent } from './categoria/listar/listar.component';
import { CategoriaEditComponent } from './categoria/edit/edit.component';
import { ProductoAddComponent } from './producto/add/add.component';
import { ProductoEditComponent } from './producto/edit/edit.component';
import { ProductoListarComponent } from './producto/listar/listar.component';



@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    HeaderComponent,
    ProveedorEditComponent,
    ProveedorListarComponent,
    ProveedorAddComponent,
    CategoriaAddComponent,
    CategoriaListarComponent,
    CategoriaEditComponent,
    ProductoAddComponent,
    ProductoEditComponent,
    ProductoListarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
