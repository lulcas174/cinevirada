import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LayoutComponent } from './layout/layout.component';
import { ListaPessoasCreditoComponent } from './other-pages/lista-pessoas-credito/lista-pessoas-credito.component';


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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
