import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaMovimientoComponent } from './cuenta-movimiento.component';

describe('CuentaMovimientoComponent', () => {
  let component: CuentaMovimientoComponent;
  let fixture: ComponentFixture<CuentaMovimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentaMovimientoComponent]
    });
    fixture = TestBed.createComponent(CuentaMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
