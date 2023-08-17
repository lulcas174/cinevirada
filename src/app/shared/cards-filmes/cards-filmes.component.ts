import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-filmes',
  templateUrl: './cards-filmes.component.html',
  styleUrls: ['./cards-filmes.component.scss']
})
export class CardsFilmesComponent {
  @Input() filmesSessao1?: any[] = [];

  @Input() filmesSessao2?: any[] = [];

  @Input() filmesSessao3?: any[] = [];
}
