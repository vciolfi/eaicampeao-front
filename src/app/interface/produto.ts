import { Fornecedor } from "./fornecedor";

export interface Produto {
    nome: string;
    quantidade: number;
    fornecedor: Fornecedor;
}
