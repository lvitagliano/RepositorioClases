import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesPorAlumnoComponent } from './clases-por-alumno.component';

describe('ClasesPorAlumnoComponent', () => {
  let component: ClasesPorAlumnoComponent;
  let fixture: ComponentFixture<ClasesPorAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasesPorAlumnoComponent]
    });
    fixture = TestBed.createComponent(ClasesPorAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
