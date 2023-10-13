import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAltaAlumnoComponent } from './formulario-alta-alumno.component';

describe('FormularioAltaAlumnoComponent', () => {
  let component: FormularioAltaAlumnoComponent;
  let fixture: ComponentFixture<FormularioAltaAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAltaAlumnoComponent]
    });
    fixture = TestBed.createComponent(FormularioAltaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
