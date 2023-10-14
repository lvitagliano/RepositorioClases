import { Component } from '@angular/core';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-formulario-alta-alumno-clase',
  templateUrl: './formulario-alta-alumno-clase.component.html',
  styleUrls: ['./formulario-alta-alumno-clase.component.css']
})
export class FormularioAltaAlumnoClaseComponent {
  listClases: any = [];
  listAlumnos: any = [];
  claseSeleccionada = '';
  alumnoSeleccionado = '';

  constructor(private _claseService: ClasesService) {

  }

  agregar() {
    this._claseService.crearClaseAlumno(this.claseSeleccionada, this.alumnoSeleccionado).subscribe(
      (response) => {
        console.log('Alumno creado exitosamente', response);
      },
      (error) => {
        console.error('Error al crear el alumno', error);
      }
    );
  }

  buscarClases(){
    this._claseService.getClases().subscribe(data => {
      this.listClases= data;
    });
  }
  buscarAlumnos(){
    this._claseService.getAlumnos().subscribe(data => {
      this.listAlumnos= data;
    });
  }
  ngOnInit():void {
    this.buscarAlumnos();
    this.buscarClases();
  }
}
