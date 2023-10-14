import { Component } from '@angular/core';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-formulario-alta-materia',
  templateUrl: './formulario-alta-materia.component.html',
  styleUrls: ['./formulario-alta-materia.component.css']
})
export class FormularioAltaMateriaComponent {
  nombre = '';
  constructor(private _claseService: ClasesService) {

  }

  agregar() {
    var MateriaDto = {
      nombre: this.nombre,
    }

    this._claseService.crearMateria(MateriaDto).subscribe(
      (response) => {
        console.log('Materia creada exitosamente', response);
      },
      (error) => {
        console.error('Error al crear la Materia', error);
      }
    );
  }
  
}
