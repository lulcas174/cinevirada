import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitivaNordesteComponent } from './competitiva-nordeste.component';

describe('CompetitivaNordesteComponent', () => {
  let component: CompetitivaNordesteComponent;
  let fixture: ComponentFixture<CompetitivaNordesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitivaNordesteComponent]
    });
    fixture = TestBed.createComponent(CompetitivaNordesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
