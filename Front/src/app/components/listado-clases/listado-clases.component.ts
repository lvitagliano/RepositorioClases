import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listado-clases',
  templateUrl: './listado-clases.component.html',
  styleUrls: ['./listado-clases.component.css']
})
export class ListadoClasesComponent {
  listClases: any = [];

  constructor(private _claseService: ClasesService, private router: Router) {

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

  redirigirARuta(id: any) {
    this.router.navigate([`/editar/clase/${id}`]);
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
