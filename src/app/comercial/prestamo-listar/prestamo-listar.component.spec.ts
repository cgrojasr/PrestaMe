import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoListarComponent } from './prestamo-listar.component';

describe('PrestamoListarComponent', () => {
  let component: PrestamoListarComponent;
  let fixture: ComponentFixture<PrestamoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamoListarComponent]
    });
    fixture = TestBed.createComponent(PrestamoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
