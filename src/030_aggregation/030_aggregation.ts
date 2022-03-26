class CarrinhoDeCompras {
  private readonly _produtos: Produto[] = [];

  get produtos(): Produto[] {
    return this._produtos;
  }

  inserirProduto(...produto: Produto[]): void {
    produto.forEach((produto) => {
      this._produtos.push(produto);
    });
  }

  quantidade(): number {
    return this._produtos.length;
  }

  total(): number {
    const total = this._produtos.reduce((acc, value) => {
      return (acc += value.preco);
    }, 0);
    return total;
  }
}

class Produto {
  constructor(public nome: string, public preco: number) { }
}

const carrinhoDeCompras = new CarrinhoDeCompras();
const biscoito = new Produto('Biscoito de chocolate', 5);
const macarrao = new Produto('Macarrão', 12);
carrinhoDeCompras.inserirProduto(biscoito);
carrinhoDeCompras.inserirProduto(macarrao);
console.log(carrinhoDeCompras.produtos);
console.log(carrinhoDeCompras.quantidade());
console.log(carrinhoDeCompras.total());

export default 1;
