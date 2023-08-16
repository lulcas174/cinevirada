import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonStyleModule } from '../shared/button-style/button-style.module';
import { FooterModule } from '../shared/footer/footer.module';
import { NavModule } from '../shared/nav/nav.module';
import { CreditosComponent } from './creditos/creditos.component';
import { FaixaSessaoComponent } from './faixa-sessao/faixa-sessao.component';
import { FirstPageRoutingModule } from './first-page-routing.module';
import { FirstPageComponent } from './first-page.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { TeaserComponent } from './teaser/teaser.component';


@NgModule({
  declarations: [
    FirstPageComponent,
    TeaserComponent,
    ProgramacaoComponent,
    CreditosComponent,
    FaixaSessaoComponent,
  ],
  imports: [
    FirstPageRoutingModule,
    CommonModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    FooterModule,
    NavModule,
    ButtonStyleModule
  ],
  providers: [BsModalService],
})
export class FirstPageModule { }
