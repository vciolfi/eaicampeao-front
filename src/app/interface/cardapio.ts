import { EstoqueProduto } from "./estoque-produto";

export interface Cardapio {
  id?: number;
  ativo: boolean;
  nome: string;
  ingredientes: EstoqueProduto[];
}
