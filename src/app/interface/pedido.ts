import { Client } from "./cliente";
import { Produto } from "./produto";

export interface Pedido {
    cliente: Client;
    produtos: Produto[];
}
