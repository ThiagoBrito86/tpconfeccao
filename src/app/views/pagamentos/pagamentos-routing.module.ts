import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { ConceitoComponent } from './conceito/conceito.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'pagamentos'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lista'
      },
      {
        path: 'lista',
        component: ListaComponent,
        data: {
          title: 'Pagamentos'
        }
      },
      {
        path: 'conceito',
        component: ConceitoComponent,
        data: {
          title: 'Conceito'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentosRoutingModule {
}
