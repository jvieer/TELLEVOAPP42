import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesConductorPage } from './viajes-conductor.page';

describe('ViajesConductorPage', () => {
  let component: ViajesConductorPage;
  let fixture: ComponentFixture<ViajesConductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajesConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
