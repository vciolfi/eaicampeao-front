import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Produto } from 'src/app/interface/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  public produtos: Produto[] = [];
  public produto: Produto = {
    nome: '',
    quantidade: 0,
    fornecedor: {
      nome: '',
      endereco: '',
      telefone: ''
    }
  };

  public isModalOpen: boolean = false;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.getProdutos().subscribe(produtos => this.produtos = produtos);
  }

  addNewProduto(produto: Produto) {
    this.produtos.push(produto)
  }

  editProduto(produto: Produto) {
    this.produto = produto;
    this.setOpen(true);
  }

  deleteProduto(name: string) {
    this.produtos = this.produtos.filter(({ nome }) => nome !== name);
  }

  onWillDismiss(event: Event) {

  }

  setOpen(value: boolean) {
    this.isModalOpen = value;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.setOpen(false)
  }

  confirm() {
    this.addNewProduto(this.produto);
    this.modal.dismiss(null, 'confirm');
    this.setOpen(false);
  }

}
