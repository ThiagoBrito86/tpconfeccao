import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListaComponent } from './lista/lista.component';
import { ConceitoComponent } from './conceito/conceito.component';
import {CortesRoutingModule} from './cortes-routing.module';


import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  NavbarModule,
  NavModule,
  SharedModule,
  TableModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    ListaComponent,
    ConceitoComponent
  ],
  imports: [
    CommonModule,
    CortesRoutingModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule,    
    NavbarModule,
    CollapseModule,
    NavModule,
    NavbarModule,
    TableModule
  ]
})
export class CortesModule {
}
