import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PruebaModel, pruebaModel } from '../Parametros/prueba.model';
import { PruebaService } from '../servicioprueba/prueba.service';

@Injectable({
  providedIn: 'root',
})
export class AgregarAnimalService {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pruebaService: PruebaService
  ) {}

  ngOnInit(): void {
    this.CreacionDeFormularios();
  }

  CreacionDeFormularios() {
    this.dataForm = this.fb.group({
      id: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      observacion: ['', [Validators.required]],
    });
  }

  get getDF() {
    return this.dataForm.controls;
  }

  guardarDatos() {
    const animal: PruebaModel = {
      nombre: this.getDF['nombre'].value,
      tipo: this.getDF['tipo'].value,
      observacion: this.getDF['observación'].value,
    };

    this.pruebaService.agregarAnimal(animal).subscribe({
      complete: () => {
        //Redirigir a la pagina principal
      },
    });
  }
}
