import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPessoasCreditoComponent } from './lista-pessoas-credito/lista-pessoas-credito.component';
import { NavComponent } from '../shared/nav/nav.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { FooterModule } from '../shared/footer/footer.module';
import { NavModule } from '../shared/nav/nav.module';
import { ButtonStyleModule } from '../shared/button-style/button-style.module';



@NgModule({
  declarations: [
    ListaPessoasCreditoComponent,
  ],
  imports: [
    CommonModule,
    FooterModule,
    NavModule,
    ButtonStyleModule
  ]
})
export class OtherPagesModule { }
