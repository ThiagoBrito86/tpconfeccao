import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { ConceitoComponent } from './conceito/conceito.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'cortes'
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
          title: 'Cortes'
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
export class CortesRoutingModule {
}
