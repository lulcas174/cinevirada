import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFilmesComponent } from './cards-filmes.component';

describe('CardsFilmesComponent', () => {
  let component: CardsFilmesComponent;
  let fixture: ComponentFixture<CardsFilmesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsFilmesComponent]
    });
    fixture = TestBed.createComponent(CardsFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
