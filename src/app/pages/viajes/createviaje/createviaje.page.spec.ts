import { ComponentFixture, TestBed } from '@angular/core/testing';
import CreateviajePage from './createviaje.page';

describe('CreateviajePage', () => {
  let component: CreateviajePage;
  let fixture: ComponentFixture<CreateviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
