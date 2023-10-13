import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlumnoPorClaseComponent } from './listado-alumno-por-clase.component';

describe('ListadoAlumnoPorClaseComponent', () => {
  let component: ListadoAlumnoPorClaseComponent;
  let fixture: ComponentFixture<ListadoAlumnoPorClaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoAlumnoPorClaseComponent]
    });
    fixture = TestBed.createComponent(ListadoAlumnoPorClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
