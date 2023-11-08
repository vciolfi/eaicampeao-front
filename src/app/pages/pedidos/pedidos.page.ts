import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../interface/pedido';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  public pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) { }

  ngOnInit() {
    this.pedidosService.getPedidos().subscribe(pedidos => this.pedidos = pedidos);
  }

}
