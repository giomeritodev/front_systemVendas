import { CategoriaDTO } from './../../models/domain/categoria.dto';
import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})

export class CategoriaComponent implements OnInit {


  categorias: CategoriaDTO[];

  constructor(
    public categoriaService: CategoriaService
  ) {}
 

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.categoriaService.findAll().subscribe(response => this.categorias = response);
  }
}
