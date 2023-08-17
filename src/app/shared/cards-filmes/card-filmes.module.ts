import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardsFilmesComponent } from './cards-filmes.component';


@NgModule({
  declarations: [CardsFilmesComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardsFilmesComponent],
})
export class CardFilmesModule {}