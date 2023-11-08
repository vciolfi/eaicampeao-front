import { Fornecedor } from "./fornecedor";

export interface EstoqueProduto {
    nome: string;
    quantidade: number;
    fornecedor: Fornecedor;
}
