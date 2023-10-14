import { Component } from '@angular/core';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-formulario-alta-alumno',
  templateUrl: './formulario-alta-alumno.component.html',
  styleUrls: ['./formulario-alta-alumno.component.css']
})
export class FormularioAltaAlumnoComponent {
  nombre = '';
  apellido = '';
  constructor(private _claseService: ClasesService) {

  }

  agregar() {
    var AlumnoDto = {
      nombre: this.nombre,
      apellido: this.apellido,
    }

    this._claseService.crearAlumno(AlumnoDto).subscribe(
      (response) => {
        console.log('Alumno creado exitosamente', response);
      },
      (error) => {
        console.error('Error al crear el Alumno', error);
      }
    );
  }
}
