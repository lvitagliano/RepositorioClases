import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent {
  listAlumnos: any = [];

  constructor(private _claseService: ClasesService, private router: Router) {

  }

  delete(id: any) {

    this._claseService.deleteAlumnoById(id).subscribe(
      (response) => {
        console.log('Alumno eliminado exitosamente', response);
        this.recargarGrilla();

      },
      (error) => {
        console.error('Error al eliminar el Alumno', error);
      }
    );
  }

  recargarGrilla() {
    this.buscarAlumnoss();
  }

  redirigirARuta(id: any) {
    this.router.navigate([`/editar/alumno/${id}`]);
  }

  buscarAlumnoss(){
    this._claseService.getAlumnos().subscribe(data => {
      this.listAlumnos= data;
    });
  }
  ngOnInit():void {
    this.buscarAlumnoss();
  }


}
