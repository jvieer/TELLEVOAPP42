import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarconductorPage } from './agregarconductor.page';

describe('AgregarconductorPage', () => {
  let component: AgregarconductorPage;
  let fixture: ComponentFixture<AgregarconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
