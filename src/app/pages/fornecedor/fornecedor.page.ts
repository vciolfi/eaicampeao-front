import { FornecedoresService } from './../../services/fornecedores.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Fornecedor } from '../../interface/fornecedor';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.page.html',
  styleUrls: ['./fornecedor.page.scss'],
})

export class FornecedorPage implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  public fornecedores: Fornecedor[] = [];
  public fornecedor: Fornecedor = { nome: '', endereco: '', telefone: '' };
  public isModalOpen: boolean = false;

  constructor(private fornecedoresService: FornecedoresService) { }

  ngOnInit() {
    this.fornecedoresService.getFornecedores().subscribe(fornecedores => this.fornecedores = fornecedores);
  }

  addNewFornecedor(fornecedor: Fornecedor) {
    this.fornecedores.push(fornecedor)
  }

  editFornecedor(fornecedor: Fornecedor) {
    this.fornecedor = fornecedor;
    this.setOpen(true);
  }

  deleteFornecedor(name: string) {
    this.fornecedores = this.fornecedores.filter(({ nome }) => nome !== name);
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
    this.addNewFornecedor(this.fornecedor);
    this.modal.dismiss(null, 'confirm');
    this.setOpen(false);
  }
}




