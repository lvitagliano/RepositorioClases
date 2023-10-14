import { Component } from '@angular/core';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-formulario-alta-profesor',
  templateUrl: './formulario-alta-profesor.component.html',
  styleUrls: ['./formulario-alta-profesor.component.css']
})
export class FormularioAltaProfesorComponent {
  nombre = '';
  apellido = '';
  constructor(private _claseService: ClasesService) {

  }

  agregar() {
    var ProfesorDto = {
      nombre: this.nombre,
      apellido: this.apellido,
    }

    this._claseService.crearProfesor(ProfesorDto).subscribe(
      (response) => {
        console.log('Profesor creado exitosamente', response);
      },
      (error) => {
        console.error('Error al crear el Profesor', error);
      }
    );
  }
}
