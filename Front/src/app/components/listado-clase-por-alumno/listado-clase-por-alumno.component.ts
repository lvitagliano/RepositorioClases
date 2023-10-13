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

  constructor(private _claseService: ClasesService, private route: ActivatedRoute) {

  }

  myFunction(id: any){
    console.log(id);
    this._claseService.deleteProfesorById(id);

  }
  buscarClases(id: any){
    this._claseService.getClasesPorAlumnoById(id).subscribe(data => {
      console.log(data)
      this.listClases= data;
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.buscarClases(id);
    });
    
}

}
