import { API_CONFIG } from './../config/api-config';
import { CategoriaDTO } from './../models/domain/categoria.dto';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategoriaService {
    
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
}