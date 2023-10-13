import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAltaClaseComponent } from './formulario-alta-clase.component';

describe('FormularioAltaClaseComponent', () => {
  let component: FormularioAltaClaseComponent;
  let fixture: ComponentFixture<FormularioAltaClaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAltaClaseComponent]
    });
    fixture = TestBed.createComponent(FormularioAltaClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
