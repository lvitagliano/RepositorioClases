import { Component, Input } from '@angular/core';
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
  @Input() Title: string;
  @Input() Id: any;
  objeto: any; 

  constructor(private _claseService: ClasesService) {
    this.Title ='';
    this.Id =null;

  }

  agregar() {
    var ClaseDto = {
      nombre: this.nombre,
      ProfesorId: this.profesorSeleccionado,
      MateriaId: this.materiaSeleccionada
    }

    if(this.objeto){
      this.objeto.nombre = this.nombre ;
      this.objeto.ProfesorId = this.profesorSeleccionado ;
      this.objeto.MateriaId = this.materiaSeleccionada ;
      this._claseService.UpdateClase(this.Id, this.objeto).subscribe(
        (response) => {
          console.log('Clase creada exitosamente', response);
        },
        (error) => {
          console.error('Error al crear la Clase', error);
        }
      );

    }else{
      this._claseService.crearClase(ClaseDto).subscribe(
        (response) => {
          console.log('Clase editada exitosamente', response);
        },
        (error) => {
          console.error('Error al editar la Clase', error);
        }
      );
    }

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

  buscarClase(id: any){
    this._claseService.getClaseById(id).subscribe(data => {
      this.objeto = data;
      this.nombre = this.objeto.nombre;
      this.profesorSeleccionado = this.objeto.ProfesorId,
      this.materiaSeleccionada = this.objeto.MateriaId
    });
  }

  ngOnInit():void {
    this.buscarProfesores();
    this.buscarMaterias();
    if(this.Id != null){
      this.buscarClase(this.Id);
    }
  }
}
