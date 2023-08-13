import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NavComponent } from './nav/nav.component';
import { TeaserComponent } from './teaser/teaser.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { CreditosComponent } from './creditos/creditos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TeaserComponent,
    ProgramacaoComponent,
    CreditosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
