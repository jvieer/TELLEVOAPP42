import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarusuariosPage } from './agregarusuarios.page';

describe('AgregarusuariosPage', () => {
  let component: AgregarusuariosPage;
  let fixture: ComponentFixture<AgregarusuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
