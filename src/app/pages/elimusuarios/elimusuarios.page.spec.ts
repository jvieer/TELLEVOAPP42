import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElimusuariosPage } from './elimusuarios.page';

describe('ElimusuariosPage', () => {
  let component: ElimusuariosPage;
  let fixture: ComponentFixture<ElimusuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElimusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
