import { HttpErrorResponse } from '@angular/common/http';
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

  configurarFormulario() {
    this.categoriaForm = this.formBuilder.group({
      nome: [null, Validators.required]
    });
  }

  findAll() {
    this.categoriaService.findAll().subscribe(response => {
      this.categorias = response
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Um erro ocorreu!");
      } else {
        console.log("API Ausente!");
      }
    });
  }

  criar() {
    this.categoriaService.criar(this.categoriaForm.value)
      .subscribe(response => {
        this.categoriaForm.reset();
        this.findAll();
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("API não existe!");
        } else {
          console.log("Erro ao criar categoria, API Ausente!");
        }
      });
  }

  alterar(id: string) {
    this.categoriaService.alterar(id)
      .subscribe(response => {

      });
  }

}