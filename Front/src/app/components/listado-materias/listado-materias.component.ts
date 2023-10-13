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

  myFunction(id: any){
    console.log(id);
    this._claseService.deleteProfesorById(id);

  }
  buscarProfesores(){
    this._claseService.getMaterias().subscribe(data => {
      this.listMaterias= data;
    });
  }
  ngOnInit():void {
    this.buscarProfesores();
  }


}
