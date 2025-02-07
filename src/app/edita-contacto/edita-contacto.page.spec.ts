import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditaContactoPage } from './edita-contacto.page';

describe('EditaContactoPage', () => {
  let component: EditaContactoPage;
  let fixture: ComponentFixture<EditaContactoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
