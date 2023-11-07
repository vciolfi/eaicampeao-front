import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Fornecedor } from '../interface/fornecedor';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.page.html',
  styleUrls: ['./fornecedor.page.scss'],
})

export class FornecedorPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  public fornecedores: Fornecedor[] = [];
  public fornecedor: Fornecedor = { nome: '', endereco: '', telefone: '' };

  constructor() { }

  ngOnInit() {
    this.fornecedores = [
      { nome: 'Vinicius Ciolfi', endereco: 'Qualquer coisa', telefone: '(11) 9 9999-8787' },
      { nome: 'Vinicius A Ciolfi', endereco: 'Qualquer coisa 1', telefone: '(11) 9 9999-8787' },
      { nome: 'Vinicius B Ciolfi', endereco: 'Qualquer coisa 2', telefone: '(11) 9 9999-8786' },
    ]
  }

  addNewFornecedor(fornecedor: Fornecedor) {
    this.fornecedores.push(fornecedor)
  }

  deleteFornecedor(name: string) {
    this.fornecedores = this.fornecedores.filter(({ nome }) => nome !== name);
  }

  onWillDismiss(event: Event) {

  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.addNewFornecedor(this.fornecedor);
    this.modal.dismiss(null, 'confirm');
  }
}




