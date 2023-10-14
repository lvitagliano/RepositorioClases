import { Component, Input } from '@angular/core';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-formulario-alta-profesor',
  templateUrl: './formulario-alta-profesor.component.html',
  styleUrls: ['./formulario-alta-profesor.component.css']
})
export class FormularioAltaProfesorComponent {
  nombre = '';
  apellido = '';
  objeto: any; 
  @Input() Title: string;
  @Input() Id: any;

  constructor(private _claseService: ClasesService) {
    this.Title ='';
    this.Id =null;

  }

  agregar() {
    var ProfesorDto = {
      nombre: this.nombre,
      apellido: this.apellido,
    }

    if(this.objeto){
      this.objeto.nombre = this.nombre ;
      this.objeto.apellido = this.apellido ;
      this._claseService.UpdateProfesor(this.Id, this.objeto).subscribe(
        (response) => {
          console.log('Profesor editado exitosamente', response);
        },
        (error) => {
          console.error('Error al editar el Profesor', error);
        }
      );

    }else{
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

  buscarProfesor(id: any){
    this._claseService.getProfesorById(id).subscribe(data => {
      this.objeto = data;
      this.nombre = this.objeto.nombre;
      this.apellido =  this.objeto.apellido;
    });
  }

  ngOnInit():void {
    if(this.Id != null){
      this.buscarProfesor(this.Id);
    }
  }

}
