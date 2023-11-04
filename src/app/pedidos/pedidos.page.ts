import { Component, OnInit } from '@angular/core';
import { Pedido } from '../interface/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  public pedidos: Pedido[] = [];

  constructor() { }

  ngOnInit() {
    this.pedidos = [
      { 
        cliente: { 
          nome: 'Alex', 
          endereco: 'sei la', 
          telefone: '11 9 8778 9885' 
        },
        produto: {
          nome: 'Bic',
          fornecedor: {
            nome: 'José Empreedimentos',
            endereco: 'Rua do José',
            telefone: '11 9 8778 9890'
          }
        }
      },
      { 
        cliente: { 
          nome: 'Bento', 
          endereco: 'sei la o que', 
          telefone: '11 9 8888 9885' 
        },
        produto: {
          nome: 'Caneta',
          fornecedor: {
            nome: 'H Empreedimentos',
            endereco: 'Rua do H',
            telefone: '11 9 8778 9899'
          }
        }
      }
    ]
  }

}
