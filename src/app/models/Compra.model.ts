export interface Compra {
    data: string;
    fornecedor: string;
    itens: ItemCompra[];
    valorTotal: number;
    metodoPagamento: string;
  }
  
  export interface ItemCompra {
    nome: string;
    quantidade: number;
    precoUnitario: number;
    precoTotal: number;
  }
  