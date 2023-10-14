import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listado-clases',
  templateUrl: './listado-clases.component.html',
  styleUrls: ['./listado-clases.component.css']
})
export class ListadoClasesComponent {
  listClases: any = [];

  constructor(private _claseService: ClasesService) {

  }

  delete(id: any) {

    this._claseService.deleteClaseById(id).subscribe(
      (response) => {
        console.log('Materia eliminada exitosamente', response);
        this.recargarGrilla();
      },
      (error) => {
        console.error('Error al eliminar la Materia', error);
      }
    );
  }

  recargarGrilla() {
    this.buscarProfesores();
  }

  buscarProfesores(){
    this._claseService.getClases().subscribe(data => {
      this.listClases= data;
    });
  }
  ngOnInit():void {
    this.buscarProfesores();
  }

}
