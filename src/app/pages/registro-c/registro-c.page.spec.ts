import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroCPage } from './registro-c.page';

describe('RegistroCPage', () => {
  let component: RegistroCPage;
  let fixture: ComponentFixture<RegistroCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
