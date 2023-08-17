import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonStyleModule } from '../shared/button-style/button-style.module';
import { CardFilmesModule } from '../shared/cards-filmes/card-filmes.module';
import { FooterModule } from '../shared/footer/footer.module';
import { NavModule } from '../shared/nav/nav.module';
import { CineviradinhaComponent } from './cineviradinha/cineviradinha.component';
import { CompetitivaBahiaComponent } from './competitiva-bahia/competitiva-bahia.component';
import { CompetitivaNordesteComponent } from './competitiva-nordeste/competitiva-nordeste.component';
import { ListaPessoasCreditoComponent } from './lista-pessoas-credito/lista-pessoas-credito.component';



@NgModule({
  declarations: [
    ListaPessoasCreditoComponent,
    CompetitivaNordesteComponent,
    CompetitivaBahiaComponent,
    CineviradinhaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FooterModule,
    NavModule,
    ButtonStyleModule,
    CardFilmesModule,
  ],
  providers: [],
})
export class OtherPagesModule { }
