import { Fornecedor } from "./fornecedor";

export interface Produto {
    nome: string;
    fornecedor: Fornecedor;
}