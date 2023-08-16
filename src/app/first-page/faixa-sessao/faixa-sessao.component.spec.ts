import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaixaSessaoComponent } from './faixa-sessao.component';

describe('FaixaSessaoComponent', () => {
  let component: FaixaSessaoComponent;
  let fixture: ComponentFixture<FaixaSessaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaixaSessaoComponent]
    });
    fixture = TestBed.createComponent(FaixaSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
