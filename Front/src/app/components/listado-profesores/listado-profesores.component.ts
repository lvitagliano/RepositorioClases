import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listado-profesores',
  templateUrl: './listado-profesores.component.html',
  styleUrls: ['./listado-profesores.component.css']
})
export class ListadoProfesoresComponent {

  listProfesores: any = [];

  constructor(private _claseService: ClasesService) {

  }

  myFunction(id: any){
    console.log(id);
    this._claseService.deleteProfesorById(id);

  }
  buscarProfesores(){
    this._claseService.getProfesores().subscribe(data => {
      this.listProfesores= data;
    });
  }
  ngOnInit():void {
    this.buscarProfesores();
  }


}
