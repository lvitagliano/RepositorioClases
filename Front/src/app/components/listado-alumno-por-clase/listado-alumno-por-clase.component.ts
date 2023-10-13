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

  constructor(private _claseService: ClasesService, private route: ActivatedRoute) {

  }

  myFunction(id: any){
    console.log(id);
    this._claseService.deleteProfesorById(id);

  }
  buscarAlumnos(id: any){
    this._claseService.getAlumnosPorClaseById(id).subscribe(data => {
      console.log(data)
      this.listAlumnos= data;
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.buscarAlumnos(id);
    });
    
}
}
