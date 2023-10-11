import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TomarviajePage } from './tomarviaje.page';

describe('TomarviajePage', () => {
  let component: TomarviajePage;
  let fixture: ComponentFixture<TomarviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TomarviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
