import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElegirconductorPage } from './elegirconductor.page';

describe('ElegirconductorPage', () => {
  let component: ElegirconductorPage;
  let fixture: ComponentFixture<ElegirconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElegirconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
