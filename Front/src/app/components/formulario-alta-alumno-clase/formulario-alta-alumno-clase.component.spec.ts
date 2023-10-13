import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAltaAlumnoClaseComponent } from './formulario-alta-alumno-clase.component';

describe('FormularioAltaAlumnoClaseComponent', () => {
  let component: FormularioAltaAlumnoClaseComponent;
  let fixture: ComponentFixture<FormularioAltaAlumnoClaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAltaAlumnoClaseComponent]
    });
    fixture = TestBed.createComponent(FormularioAltaAlumnoClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
