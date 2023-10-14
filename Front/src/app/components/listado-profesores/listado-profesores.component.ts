import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listado-profesores',
  templateUrl: './listado-profesores.component.html',
  styleUrls: ['./listado-profesores.component.css']
})
export class ListadoProfesoresComponent {

  listProfesores: any = [];

  constructor(private _claseService: ClasesService) {

  }

  delete(id: any) {

    this._claseService.deleteProfesorById(id).subscribe(
      (response) => {
        console.log('Profesor eliminado exitosamente', response);
        this.recargarGrilla(); 
      },
      (error) => {
        console.error('Error al eliminar el Profesor', error);
      }
    );
  }

  recargarGrilla() {
    this.buscarProfesores();
  }

  buscarProfesores(){
    this._claseService.getProfesores().subscribe(data => {
      this.listProfesores= data;
    });
  }
  ngOnInit():void {
    this.buscarProfesores();
  }


}
