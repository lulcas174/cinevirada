import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPessoasCreditoComponent } from './lista-pessoas-credito.component';

describe('ListaPessoasCreditoComponent', () => {
  let component: ListaPessoasCreditoComponent;
  let fixture: ComponentFixture<ListaPessoasCreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPessoasCreditoComponent]
    });
    fixture = TestBed.createComponent(ListaPessoasCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
