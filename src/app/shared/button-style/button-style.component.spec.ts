import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStyleComponent } from './button-style.component';

describe('ButtonStyleComponent', () => {
  let component: ButtonStyleComponent;
  let fixture: ComponentFixture<ButtonStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonStyleComponent]
    });
    fixture = TestBed.createComponent(ButtonStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
