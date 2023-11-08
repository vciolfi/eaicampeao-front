import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interface/cliente';
import { EstoqueProduto } from 'src/app/interface/estoque-produto';
import { Fornecedor } from 'src/app/interface/fornecedor';
import { Pedido } from 'src/app/interface/pedido';
import { ClientesService } from 'src/app/services/clientes.service';
import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { EstoqueProdutosService } from 'src/app/services/estoque-produtos.service';
import { CardapioPage } from '../cardapio/cardapio.page';
import { Cardapio } from 'src/app/interface/cardapio';
import { CardapioService } from 'src/app/services/cardapio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public clientes: Client[] = [];
  public pedidos: Pedido[] = [];
  public estoqueProdutos: EstoqueProduto[] = [];
  public fornecedores: Fornecedor[] = [];
  public cardapios: Cardapio[] = [];

  constructor(
      private clientesService: ClientesService,
      private estoqueProdutoService: EstoqueProdutosService,
      private pedidosService: PedidosService,
      private fornecedoresService: FornecedoresService,
      private cardapioService: CardapioService
    ) { }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(clientes => this.clientes = clientes);
    this.fornecedoresService.getFornecedores().subscribe(fornecedores => this.fornecedores = fornecedores);
    this.estoqueProdutoService.getEstoqueProdutos().subscribe(produtos => this.estoqueProdutos = produtos);
    this.pedidosService.getPedidos().subscribe(pedidos => this.pedidos = pedidos);
    this.cardapioService.getCardapios().subscribe(cardapio => this.cardapios = cardapio);
  }
}
