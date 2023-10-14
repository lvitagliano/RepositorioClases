import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.css']
})
export class ListadoMateriasComponent {
  listMaterias: any = [];

  constructor(private _claseService: ClasesService) {

  }

  delete(id: any) {

    this._claseService.deleteMateriaById(id).subscribe(
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
    this.buscarMaterias();
  }

  buscarMaterias(){
    this._claseService.getMaterias().subscribe(data => {
      this.listMaterias= data;
    });
  }
  ngOnInit():void {
    this.buscarMaterias();
  }


}
