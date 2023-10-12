import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminosPage } from './terminos.page';

describe('TerminosPage', () => {
  let component: TerminosPage;
  let fixture: ComponentFixture<TerminosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerminosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
