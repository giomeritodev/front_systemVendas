import { API_CONFIG } from './../config/api-config';
import { CategoriaDTO } from './../models/domain/categoria.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoriaService {
    
    categoriaDTO: CategoriaDTO;

    constructor(
        public http: HttpClient
    ) { }

    findAll(){
       return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseURL}/categorias`);
    }
    
    criar(categoria: CategoriaDTO){
        return this.http.post(`${API_CONFIG.baseURL}/categorias`, categoria, {
            observe: 'response',
            responseType: 'text'
        });
    }

    findById(id: string){
        return this.http.get(`${API_CONFIG.baseURL}/categorias/${id}`);
    }

    alterar(id: string){
        //let headers = new Headers();
        return this.http.put(`${API_CONFIG.baseURL}/categorias/${id}`, this.categoriaDTO /*{headers: headers}*/);
    }

    deletar(id: string){
        return this.http.delete(`${API_CONFIG.baseURL}/categorias/${id}`);
    }
}