import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent {
  listAlumnos: any = [];

  constructor(private _claseService: ClasesService) {

  }

  myFunction(id: any){
    console.log(id);
    this._claseService.deleteProfesorById(id);

  }
  buscarProfesores(){
    this._claseService.getAlumnos().subscribe(data => {
      this.listAlumnos= data;
    });
  }
  ngOnInit():void {
    this.buscarProfesores();
  }


}
