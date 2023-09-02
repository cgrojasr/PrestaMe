import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaGestionarComponent } from './cuenta-gestionar.component';

describe('CuentaGestionarComponent', () => {
  let component: CuentaGestionarComponent;
  let fixture: ComponentFixture<CuentaGestionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentaGestionarComponent]
    });
    fixture = TestBed.createComponent(CuentaGestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
