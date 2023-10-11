import { ComponentFixture, TestBed } from '@angular/core/testing';
import ViajesCPage from './viajes-c.page';

describe('ViajesCPage', () => {
  let component: ViajesCPage;
  let fixture: ComponentFixture<ViajesCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajesCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
