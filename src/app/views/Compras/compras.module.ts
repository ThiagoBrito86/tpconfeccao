import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective , NgxMaskPipe, provideNgxMask} from 'ngx-mask';

import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { ListaComponent } from './lista/lista.component';
import { ConceitoComponent } from './conceito/conceito.component';
import {ComprasRoutingModule} from './compras-routing.module';


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
import { CompraRegistrarComponent } from './compra-registrar/compra-registrar.component';

@NgModule({
  declarations: [
    ListaComponent,
    ConceitoComponent,
    CompraRegistrarComponent,
    CompraRegistrarComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule,
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
    DocsComponentsModule,
    NavbarModule,
    CollapseModule,
    NavModule,
    NavbarModule,
    TableModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    
  ],
  providers: [provideNgxMask()]
})
export class ComprasModule {
}
