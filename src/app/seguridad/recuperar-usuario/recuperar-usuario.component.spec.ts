import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarUsuarioComponent } from './recuperar-usuario.component';

describe('RecuperarUsuarioComponent', () => {
  let component: RecuperarUsuarioComponent;
  let fixture: ComponentFixture<RecuperarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarUsuarioComponent]
    });
    fixture = TestBed.createComponent(RecuperarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
