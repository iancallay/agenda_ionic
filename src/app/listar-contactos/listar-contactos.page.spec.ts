import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarContactosPage } from './listar-contactos.page';

describe('ListarContactosPage', () => {
  let component: ListarContactosPage;
  let fixture: ComponentFixture<ListarContactosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarContactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
