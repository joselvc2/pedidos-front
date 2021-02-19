import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Proveedor } from '../modelo/proveedor';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/proveedores';
  getPersonas(){
    return this.http.get<Proveedor[]>(this.Url);
  }
  createPersona(proveedor:Proveedor){
    return this.http.post<Proveedor>(this.Url,proveedor);
  }
  getPersonaId(id:number){
    return this.http.get<Proveedor>(this.Url+"/"+id);
  }
  updatePersona(proveedor:Proveedor){
    return this.http.put<Proveedor>(this.Url+"/"+proveedor.id,proveedor);
  }
  deletePersona(proveedor:Proveedor){
    return this.http.delete<Proveedor>(this.Url+"/"+proveedor.id);
  }

}
