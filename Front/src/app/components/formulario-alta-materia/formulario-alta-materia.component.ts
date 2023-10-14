import { Component, Input } from '@angular/core';
import { ClasesService } from '../../services/clases.service';

@Component({
  selector: 'app-formulario-alta-materia',
  templateUrl: './formulario-alta-materia.component.html',
  styleUrls: ['./formulario-alta-materia.component.css']
})
export class FormularioAltaMateriaComponent {
  nombre = '';
  @Input() Title: string;
  @Input() Id: any;
  objeto: any; 

  constructor(private _claseService: ClasesService) {
    this.Title ='';    
    this.Id =null;

  }

  agregar() {
    var MateriaDto = {
      nombre: this.nombre,
    }

    if(this.objeto){
      this.objeto.nombre = this.nombre ;
      this._claseService.UpdateAlumno(this.Id, this.objeto).subscribe(
        (response) => {
          console.log('Materia editada exitosamente', response);
        },
        (error) => {
          console.error('Error al editar la Materia', error);
        }
      );

    }else{
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
  
  buscarMateria(id: any){
    this._claseService.getMateriaById(id).subscribe(data => {
      this.objeto = data;
      this.nombre = this.objeto.nombre;
    });
  }

  ngOnInit():void {
    if(this.Id != null){
      this.buscarMateria(this.Id);
    }
  }
}
