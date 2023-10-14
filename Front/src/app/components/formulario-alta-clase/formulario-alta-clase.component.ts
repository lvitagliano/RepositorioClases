import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-formulario-alta-clase',
  templateUrl: './formulario-alta-clase.component.html',
  styleUrls: ['./formulario-alta-clase.component.css']
})
export class FormularioAltaClaseComponent {
  listMaterias: any = [];
  listProfesores: any = [];
  profesorSeleccionado = '';
  materiaSeleccionada = '';
  nombre = '';
  constructor(private _claseService: ClasesService) {

  }

  agregar() {
    var ClaseDto = {
      nombre: this.nombre,
      ProfesorId: this.profesorSeleccionado,
      MateriaId: this.materiaSeleccionada
    }

    this._claseService.crearClase(ClaseDto).subscribe(
      (response) => {
        console.log('Alumno creado exitosamente', response);
      },
      (error) => {
        console.error('Error al crear el alumno', error);
      }
    );
  }

  buscarMaterias(){
    this._claseService.getMaterias().subscribe(data => {
      this.listMaterias= data;
    });
  }
  buscarProfesores(){
    this._claseService.getProfesores().subscribe(data => {
      this.listProfesores= data;
    });
  }
  ngOnInit():void {
    this.buscarProfesores();
    this.buscarMaterias();
  }
}
