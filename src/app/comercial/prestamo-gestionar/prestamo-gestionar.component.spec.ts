import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoGestionarComponent } from './prestamo-gestionar.component';

describe('PrestamoGestionarComponent', () => {
  let component: PrestamoGestionarComponent;
  let fixture: ComponentFixture<PrestamoGestionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamoGestionarComponent]
    });
    fixture = TestBed.createComponent(PrestamoGestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
