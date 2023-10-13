import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAltaProfesorComponent } from './formulario-alta-profesor.component';

describe('FormularioAltaProfesorComponent', () => {
  let component: FormularioAltaProfesorComponent;
  let fixture: ComponentFixture<FormularioAltaProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAltaProfesorComponent]
    });
    fixture = TestBed.createComponent(FormularioAltaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
