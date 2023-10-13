import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoPorClaseComponent } from './alumno-por-clase.component';

describe('AlumnoPorClaseComponent', () => {
  let component: AlumnoPorClaseComponent;
  let fixture: ComponentFixture<AlumnoPorClaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoPorClaseComponent]
    });
    fixture = TestBed.createComponent(AlumnoPorClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
