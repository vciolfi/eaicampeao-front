import { Client } from "./cliente";
import { EstoqueProduto } from "./estoque-produto";

export interface Pedido {
    id: number;
    cliente: Client;
    estoqueProdutos: EstoqueProduto[];
}
