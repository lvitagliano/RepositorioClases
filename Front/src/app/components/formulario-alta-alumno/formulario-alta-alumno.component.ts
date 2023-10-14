import { Component, Input } from '@angular/core';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-formulario-alta-alumno',
  templateUrl: './formulario-alta-alumno.component.html',
  styleUrls: ['./formulario-alta-alumno.component.css']
})
export class FormularioAltaAlumnoComponent {
  nombre = '';
  apellido = '';
  @Input() Title: string;
  @Input() Id: any;
  objeto: any; 

  constructor(private _claseService: ClasesService) {
    this.Title ='';
    this.Id =null;
  }

  
  agregar() {
    var AlumnoDto = {
      nombre: this.nombre,
      apellido: this.apellido,
    }

    if(this.objeto){
      this.objeto.nombre = this.nombre ;
      this.objeto.apellido = this.apellido ;
      this._claseService.UpdateAlumno(this.Id, this.objeto).subscribe(
        (response) => {
          console.log('Alumno editado exitosamente', response);
        },
        (error) => {
          console.error('Error al editar el Alumno', error);
        }
      );

    }else{
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

  buscarAlumno(id: any){
    this._claseService.getAlumnoById(id).subscribe(data => {
      this.objeto = data;
      this.nombre = this.objeto.nombre;
      this.apellido =  this.objeto.apellido;
    });
  }

  ngOnInit():void {
    if(this.Id != null){
      this.buscarAlumno(this.Id);
    }
  }
}
