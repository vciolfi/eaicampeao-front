import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { EstoqueProduto } from 'src/app/interface/estoque-produto';
import { EstoqueProdutosService } from 'src/app/services/estoque-produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './estoque-produto.page.html',
  styleUrls: ['./estoque-produto.page.scss'],
})
export class EstoqueProdutoPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  public estoqueProdutos: EstoqueProduto[] = [];
  public estoqueProduto: EstoqueProduto = {
    nome: '',
    quantidade: 0,
    fornecedor: {
      nome: '',
      endereco: '',
      telefone: ''
    }
  };

  public isModalOpen: boolean = false;

  constructor(private estoqueProdutosService: EstoqueProdutosService) { }

  ngOnInit() {
    this.estoqueProdutosService.getEstoqueProdutos().subscribe(estoqueProdutos => this.estoqueProdutos = estoqueProdutos);
  }

  addNewProduto(estoqueProduto: EstoqueProduto) {
    this.estoqueProdutos.push(estoqueProduto)
  }

  editProduto(estoqueProduto: EstoqueProduto) {
    this.estoqueProduto = estoqueProduto;
    this.setOpen(true);
  }

  deleteProduto(name: string) {
    this.estoqueProdutos = this.estoqueProdutos.filter(({ nome }) => nome !== name);
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
    this.addNewProduto(this.estoqueProduto);
    this.modal.dismiss(null, 'confirm');
    this.setOpen(false);
  }

}
