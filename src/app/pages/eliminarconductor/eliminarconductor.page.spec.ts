import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarconductorPage } from './eliminarconductor.page';

describe('EliminarconductorPage', () => {
  let component: EliminarconductorPage;
  let fixture: ComponentFixture<EliminarconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EliminarconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
