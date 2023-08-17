import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LayoutComponent } from './layout/layout.component';
import { ListaPessoasCreditoComponent } from './other-pages/lista-pessoas-credito/lista-pessoas-credito.component';
import { CompetitivaNordesteComponent } from './other-pages/competitiva-nordeste/competitiva-nordeste.component';
import { CompetitivaBahiaComponent } from './other-pages/competitiva-bahia/competitiva-bahia.component';
import { CineviradinhaComponent } from './other-pages/cineviradinha/cineviradinha.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', 
        loadChildren: () => import ('./first-page/first-page.module').then(m => m.FirstPageModule)
      },
    ]
  },
  {
    path: '',
    loadChildren: () =>
      import('./other-pages/other-pages.module').then((m) => m.OtherPagesModule),
  },
  {
    path: 'equipe',
    component: ListaPessoasCreditoComponent
  },
  {
    path: 'competitiva-nordeste',
    component: CompetitivaNordesteComponent
  },
  {
    path: 'competitiva-bahia',
    component: CompetitivaBahiaComponent
  },
  {
    path: 'cineviradinha',
    component: CineviradinhaComponent
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
