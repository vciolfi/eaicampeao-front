import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interface/cliente';
import { Fornecedor } from 'src/app/interface/fornecedor';
import { Pedido } from 'src/app/interface/pedido';
import { Produto } from 'src/app/interface/produto';
import { ClientesService } from 'src/app/services/clientes.service';
import { FornecedoresService } from 'src/app/services/fornecedores.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public clientes: Client[] = [];
  public pedidos: Pedido[] = [];
  public produtos: Produto[] = [];
  public fornecedores: Fornecedor[] = [];

  constructor(
      private clientesService: ClientesService,
      private produtoService: ProdutosService,
      private pedidosService: PedidosService,
      private fornecedoresService: FornecedoresService
    ) { }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(clientes => this.clientes = clientes);
    this.fornecedoresService.getFornecedores().subscribe(fornecedores => this.fornecedores = fornecedores);
    this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
    this.pedidosService.getPedidos().subscribe(pedidos => this.pedidos = pedidos);
  }

}
