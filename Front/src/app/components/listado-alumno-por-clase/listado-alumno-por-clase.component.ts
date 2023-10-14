import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listado-alumno-por-clase',
  templateUrl: './listado-alumno-por-clase.component.html',
  styleUrls: ['./listado-alumno-por-clase.component.css']
})
export class ListadoAlumnoPorClaseComponent {
  listAlumnos: any = [];
  clase: any;
  constructor(private _claseService: ClasesService, private route: ActivatedRoute) {

  }


  buscarAlumnos(id: any){
    this._claseService.getAlumnosPorClaseById(id).subscribe(data => {
      this.listAlumnos= data;
    });
  }

  buscarClase(id: any){
    this._claseService.getClaseById(id).subscribe(data => {
      this.clase= data;
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.buscarAlumnos(id);
      this.buscarClase(id);
    });
    
}
}
