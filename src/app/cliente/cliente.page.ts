import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Client } from '../interface/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  
  @ViewChild(IonModal) modal!: IonModal;

  public clientes: Client[] = [];
  public client: Client = { nome: '', endereco: '', telefone: '' };

  constructor() { }
  
  ngOnInit() {
    // this.clientes = this.clienteService.getClientes();
    this.clientes = [
      { nome: 'Vinicius Ciolfi', endereco: 'Qualquer coisa', telefone: '(11) 9 9999-8787' },
      { nome: 'Vinicius A Ciolfi', endereco: 'Qualquer coisa 1', telefone: '(11) 9 9999-8787' },
      { nome: 'Vinicius B Ciolfi', endereco: 'Qualquer coisa 2', telefone: '(11) 9 9999-8786' },
      { nome: 'Vinicius C Ciolfi', endereco: 'Qualquer coisa 3', telefone: '(11) 9 9999-8785' },
      { nome: 'Vinicius D Ciolfi', endereco: 'Qualquer coisa 4', telefone: '(11) 9 9999-8784' },
      { nome: 'Vinicius E Ciolfi', endereco: 'Qualquer coisa 5', telefone: '(11) 9 9999-8783' },
      { nome: 'Vinicius F Ciolfi', endereco: 'Qualquer coisa 6', telefone: '(11) 9 9999-8782' },
      { nome: 'Vinicius G Ciolfi', endereco: 'Qualquer coisa 7', telefone: '(11) 9 9999-8781' },
      { nome: 'Vinicius H Ciolfi', endereco: 'Qualquer coisa 8', telefone: '(11) 9 9999-8780' },
      { nome: 'Vinicius I Ciolfi', endereco: 'Qualquer coisa 9', telefone: '(11) 9 9999-8788' },
      { nome: 'Vinicius Ciolfi', endereco: 'Qualquer coisa', telefone: '(11) 9 9999-8787' },
      { nome: 'Vinicius A Ciolfi', endereco: 'Qualquer coisa 1', telefone: '(11) 9 9999-8787' },
      { nome: 'Vinicius B Ciolfi', endereco: 'Qualquer coisa 2', telefone: '(11) 9 9999-8786' },
      { nome: 'Vinicius C Ciolfi', endereco: 'Qualquer coisa 3', telefone: '(11) 9 9999-8785' },
      { nome: 'Vinicius D Ciolfi', endereco: 'Qualquer coisa 4', telefone: '(11) 9 9999-8784' },
      { nome: 'Vinicius E Ciolfi', endereco: 'Qualquer coisa 5', telefone: '(11) 9 9999-8783' },
      { nome: 'Vinicius F Ciolfi', endereco: 'Qualquer coisa 6', telefone: '(11) 9 9999-8782' },
      { nome: 'Vinicius G Ciolfi', endereco: 'Qualquer coisa 7', telefone: '(11) 9 9999-8781' },
      { nome: 'Vinicius H Ciolfi', endereco: 'Qualquer coisa 8', telefone: '(11) 9 9999-8780' },
      { nome: 'Vinicius I Ciolfi', endereco: 'Qualquer coisa 9', telefone: '(11) 9 9999-8788' },
      { nome: 'Vinicius Ciolfi', endereco: 'Qualquer coisa', telefone: '(11) 9 9999-8787' },
      { nome: 'Vinicius A Ciolfi', endereco: 'Qualquer coisa 1', telefone: '(11) 9 9999-8787' },
      { nome: 'Vinicius B Ciolfi', endereco: 'Qualquer coisa 2', telefone: '(11) 9 9999-8786' },
      { nome: 'Vinicius C Ciolfi', endereco: 'Qualquer coisa 3', telefone: '(11) 9 9999-8785' },
      { nome: 'Vinicius D Ciolfi', endereco: 'Qualquer coisa 4', telefone: '(11) 9 9999-8784' },
      { nome: 'Vinicius E Ciolfi', endereco: 'Qualquer coisa 5', telefone: '(11) 9 9999-8783' },
      { nome: 'Vinicius F Ciolfi', endereco: 'Qualquer coisa 6', telefone: '(11) 9 9999-8782' },
      { nome: 'Vinicius G Ciolfi', endereco: 'Qualquer coisa 7', telefone: '(11) 9 9999-8781' },
      { nome: 'Vinicius H Ciolfi', endereco: 'Qualquer coisa 8', telefone: '(11) 9 9999-8780' },
      { nome: 'Vinicius I Ciolfi', endereco: 'Qualquer coisa 9', telefone: '(11) 9 9999-8788' },
    ];
  }

  addNewClient(client: Client) {
    this.clientes.push(client)
  }

  // deleta cliente
  deleteClient(name: string) {
    this.clientes = this.clientes.filter(({ nome }) => nome !== name);
  }

  onWillDismiss(event: Event) {

  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.addNewClient(this.client);
    this.modal.dismiss(null, 'confirm');
  }
}
