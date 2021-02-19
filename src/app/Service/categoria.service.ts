import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Categoria } from '../modelo/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/categorias';
  getCategoria(){
    return this.http.get<Categoria[]>(this.Url);
  }
  createCategoria(categoria:Categoria){
    return this.http.post<Categoria>(this.Url,categoria);
  }
  getCategoriaId(id:number){
    return this.http.get<Categoria>(this.Url+"/"+id);
  }
  updateCategoria(categoria:Categoria){
    return this.http.put<Categoria>(this.Url+"/"+categoria.id,categoria);
  }
  deleteCategoria(categoria:Categoria){
    return this.http.delete<Categoria>(this.Url+"/"+categoria.id);
  }
}
