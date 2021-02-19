import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Empleado } from '../modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/empleados';
  getPersonas(){
    return this.http.get<Empleado[]>(this.Url);
  }
  createPersona(empleado:Empleado){
    return this.http.post<Empleado>(this.Url,empleado);
  }
  getPersonaId(id:number){
    return this.http.get<Empleado>(this.Url+"/"+id);
  }
  updatePersona(empleado:Empleado){
    return this.http.put<Empleado>(this.Url+"/"+empleado.id,empleado);
  }
  deletePersona(empleado:Empleado){
    return this.http.delete<Empleado>(this.Url+"/"+empleado.id);
  }
}
