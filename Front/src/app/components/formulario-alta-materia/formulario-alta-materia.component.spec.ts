import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAltaMateriaComponent } from './formulario-alta-materia.component';

describe('FormularioAltaMateriaComponent', () => {
  let component: FormularioAltaMateriaComponent;
  let fixture: ComponentFixture<FormularioAltaMateriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAltaMateriaComponent]
    });
    fixture = TestBed.createComponent(FormularioAltaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
