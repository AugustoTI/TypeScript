class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) { }

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log('Não posso escrever sem uma ferramenta');
      return;
    }
    this._ferramenta.escrever();
  }
}

abstract class Ferramenta {
  constructor(private _nome: string) { }

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

class MaquinaDeEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Augusto');
const caneta = new Caneta('Bic');
const maquinaDeEscrever = new MaquinaDeEscrever('Teste');

escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquinaDeEscrever;
escritor.escrever();

export default 1;
