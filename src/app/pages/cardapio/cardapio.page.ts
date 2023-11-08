import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Cardapio } from 'src/app/interface/cardapio';
import { EstoqueProduto } from 'src/app/interface/estoque-produto';
import { CardapioService } from 'src/app/services/cardapio.service';
import { EstoqueProdutosService } from 'src/app/services/estoque-produtos.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  public estoqueProdutos: EstoqueProduto[] = [];
  public cardapios: Cardapio[] = [];
  public cardapio: Cardapio = {
    nome: '',
    ativo: true,
    ingredientes: [{
        nome: '',
        quantidade: 0,
        fornecedor: {
          nome: '',
          endereco: '',
          telefone: '',
        }
    }]
  }

  constructor(private cardapioService: CardapioService, private estoqueProdutosService: EstoqueProdutosService) { }

  ngOnInit() {
    this.getCardapios();
    this.getEstoque();
  }

  private getCardapios() {
    this.cardapioService.getCardapios().subscribe(cardapios => this.cardapios = cardapios);
  }

  private getEstoque() {
    this.estoqueProdutosService.getEstoqueProdutos().subscribe(estoqueProdutos => this.estoqueProdutos = estoqueProdutos);
  }

  add(cardapio: Cardapio) {
    cardapio.id = this.cardapios.length + 1;
    this.cardapioService.addCardapio(cardapio)
      .subscribe(cardapio => this.cardapios.push(cardapio));
  }

  delete(name: string) {
    this.cardapios = this.cardapios.filter(({ nome }) => nome !== name);
  }

  onWillDismiss(event: Event) {

  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.add(this.cardapio);
    this.modal.dismiss(null, 'confirm');
  }

  compareWith(o1: any, o2: any) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev: any) {
    if (ev.target.value) {
      this.cardapio.ingredientes = ev.target.value;
    }
  }
}
