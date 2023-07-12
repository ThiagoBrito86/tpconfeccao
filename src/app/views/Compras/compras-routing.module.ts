import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { ConceitoComponent } from './conceito/conceito.component';
import { CompraRegistrarComponent } from './compra-registrar/compra-registrar.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'compras'
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
          title: 'Compras'
        }
      },
      {
        path: 'conceito',
        component: ConceitoComponent,
        data: {
          title: 'Conceito'
        }
      },
      {
        path: 'registrar',
        component: CompraRegistrarComponent,
        data: {
          title: 'Registrar'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule {
}
