import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.css']
})
export class ListadoMateriasComponent {
  listMaterias: any = [];

  constructor(private _claseService: ClasesService, private router: Router) {

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

   redirigirARuta(id: any) {
    this.router.navigate([`/editar/materia/${id}`]);
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
