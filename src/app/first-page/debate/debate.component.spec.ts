import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebateComponent } from './debate.component';

describe('DebateComponent', () => {
  let component: DebateComponent;
  let fixture: ComponentFixture<DebateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebateComponent]
    });
    fixture = TestBed.createComponent(DebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
