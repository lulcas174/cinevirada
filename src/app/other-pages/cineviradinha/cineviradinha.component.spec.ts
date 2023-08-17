import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineviradinhaComponent } from './cineviradinha.component';

describe('CineviradinhaComponent', () => {
  let component: CineviradinhaComponent;
  let fixture: ComponentFixture<CineviradinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CineviradinhaComponent]
    });
    fixture = TestBed.createComponent(CineviradinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
