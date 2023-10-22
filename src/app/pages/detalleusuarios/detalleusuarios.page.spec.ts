import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleusuariosPage } from './detalleusuarios.page';

describe('DetalleusuariosPage', () => {
  let component: DetalleusuariosPage;
  let fixture: ComponentFixture<DetalleusuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
