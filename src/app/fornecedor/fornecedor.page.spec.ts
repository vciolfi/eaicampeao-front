import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FornecedorPage } from './fornecedor.page';

describe('FornecedorPage', () => {
  let component: FornecedorPage;
  let fixture: ComponentFixture<FornecedorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FornecedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
