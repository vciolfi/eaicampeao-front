import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstoqueProdutoPageRoutingModule } from './estoque-produto-routing.module';

import { EstoqueProdutoPage } from './estoque-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstoqueProdutoPageRoutingModule
  ],
  declarations: [EstoqueProdutoPage]
})
export class EstoqueProdutoPageModule {}
