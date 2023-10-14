import { Component } from '@angular/core';
import { ClasesService } from '../../services/clases.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  type : any;
  editId : any;
  constructor(private _claseService: ClasesService, private route: ActivatedRoute) {
    this.type ='';
    this.editId =null;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.type = params.get('type');
      this.editId = params.get('id');

    });
  }

}