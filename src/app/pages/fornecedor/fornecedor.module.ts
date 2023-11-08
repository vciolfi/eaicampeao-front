import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FornecedorPageRoutingModule } from './fornecedor-routing.module';

import { FornecedorPage } from './fornecedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FornecedorPageRoutingModule
  ],
  declarations: [FornecedorPage]
})
export class FornecedorPageModule {}
