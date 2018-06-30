import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CategoriaDTO } from './../../models/domain/categoria.dto';
import { CategoriaService } from './../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})

export class CategoriaComponent implements OnInit {


  categorias: CategoriaDTO[];
  
  categoriaForm: FormGroup;

  constructor(
    public categoriaService: CategoriaService,
    public formBuilder: FormBuilder
  ) { }


  ngOnInit() {

    this.configurarFormulario();
    this.findAll();
  }

  configurarFormulario(){
    this.categoriaForm = this.formBuilder.group({
      nome: [null, Validators.required]
    });
  }

  findAll() {
    this.categoriaService.findAll().subscribe(response => this.categorias = response);
  }

  criar() {
    this.categoriaService.criar(this.categoriaForm.value)
      .subscribe(response => {
        //this.categorias.push(response['content']);
        this.categoriaForm.reset();
      });
  }
}
