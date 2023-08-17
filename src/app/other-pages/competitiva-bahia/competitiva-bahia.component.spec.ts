import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitivaBahiaComponent } from './competitiva-bahia.component';

describe('CompetitivaBahiaComponent', () => {
  let component: CompetitivaBahiaComponent;
  let fixture: ComponentFixture<CompetitivaBahiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitivaBahiaComponent]
    });
    fixture = TestBed.createComponent(CompetitivaBahiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
