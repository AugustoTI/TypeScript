class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _CPF: string,
  ) { }

  set CPF(valor: string) {
    this._CPF = valor;
  }

  get CPF(): string {
    return this._CPF.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Augusto', 'César', 19, '000.000.000-00');
console.log(pessoa.CPF);
pessoa.CPF = '123.456.789-00';
console.log(pessoa.CPF);

export default 1;
