import { Component } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-listado-clases',
  templateUrl: './listado-clases.component.html',
  styleUrls: ['./listado-clases.component.css']
})
export class ListadoClasesComponent {
  listClases: any = [];

  constructor(private _claseService: ClasesService) {

  }

  myFunction(id: any){
    console.log(id);
    this._claseService.deleteProfesorById(id);

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
