import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaListarComponent } from './cuenta-listar.component';

describe('CuentaListarComponent', () => {
  let component: CuentaListarComponent;
  let fixture: ComponentFixture<CuentaListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentaListarComponent]
    });
    fixture = TestBed.createComponent(CuentaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
