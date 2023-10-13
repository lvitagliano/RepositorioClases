import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-alta-alumno-clase',
  templateUrl: './formulario-alta-alumno-clase.component.html',
  styleUrls: ['./formulario-alta-alumno-clase.component.css']
})
export class FormularioAltaAlumnoClaseComponent {
  claseSeleccionada = '';
  alumnoSeleccionado = '';

  alumnos: any[] = [
    {value: 'General', nombre: 'General'},
    {value: '2', nombre: '2'},
    {value: '3', nombre: '3'}
  ];

  clases: any[] = [
    {value: 'General', nombre: 'General'},
    {value: '2', nombre: '2'},
    {value: '3', nombre: '3'}
  ]

  /**
   *
   */
  constructor() {}

  agregarelacion() {
    console.log(this.alumnoSeleccionado + "Hello");
  }
}
