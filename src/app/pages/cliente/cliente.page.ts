import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Client } from '../../interface/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  public clientes: Client[] = [];
  public client: Client = { nome: '', endereco: '', telefone: '' };

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientesService.getClientes().subscribe(clientes => this.clientes = clientes);
  }

  addNewClient(client: Client) {
    this.clientes.push(client)
  }

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
