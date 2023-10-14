import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usuarios20Page } from './usuarios20.page';

describe('Usuarios20Page', () => {
  let component: Usuarios20Page;
  let fixture: ComponentFixture<Usuarios20Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Usuarios20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
