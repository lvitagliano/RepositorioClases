import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoClasePorAlumnoComponent } from './listado-clase-por-alumno.component';

describe('ListadoClasePorAlumnoComponent', () => {
  let component: ListadoClasePorAlumnoComponent;
  let fixture: ComponentFixture<ListadoClasePorAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoClasePorAlumnoComponent]
    });
    fixture = TestBed.createComponent(ListadoClasePorAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
