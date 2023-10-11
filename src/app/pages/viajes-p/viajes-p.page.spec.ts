import { ComponentFixture, TestBed } from '@angular/core/testing';
import ViajesPPage from './viajes-p.page';

describe('ViajesPPage', () => {
  let component: ViajesPPage;
  let fixture: ComponentFixture<ViajesPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajesPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
