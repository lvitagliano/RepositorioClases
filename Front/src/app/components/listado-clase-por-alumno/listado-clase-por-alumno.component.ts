import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasesService } from 'src/app/services/clases.service';
@Component({
  selector: 'app-listado-clase-por-alumno',
  templateUrl: './listado-clase-por-alumno.component.html',
  styleUrls: ['./listado-clase-por-alumno.component.css']
})
export class ListadoClasePorAlumnoComponent {
  listClases: any = [];
  alumno: any;
  constructor(private _claseService: ClasesService, private route: ActivatedRoute) {

  }

  delete(ClaseAlumnoId: any){
    this._claseService.deleteAlumnoClaseById(ClaseAlumnoId);
    this.recargarGrilla(); 
  }
  recargarGrilla() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.buscarClases(id);
      this.buscarAlumno(id);
    });
  }

  buscarClases(id: any){
    this._claseService.getClasesPorAlumnoById(id).subscribe(data => {
      this.listClases= data;
    });
  }

  buscarAlumno(id: any){
    this._claseService.getAlumnoById(id).subscribe(data => {
      this.alumno= data;

    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.buscarClases(id);
      this.buscarAlumno(id);
    });
    
}

}
