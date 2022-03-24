class Pessoa {
  static nomePadrao = 'Nome Qualquer';
  static idadePadrao = 'Idade Qualquer';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public CPF: string,
  ) { }

  falar(): void {
    console.log(Pessoa.nomePadrao, Pessoa.idadePadrao);
  }

  static criarPessoaSimples(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
  }
}

const pessoa1 = new Pessoa('Augusto', 'César', 19, '000.000.000-00');
const pessoa2 = Pessoa.criarPessoaSimples('Augusto', 'César');
console.log(pessoa2);
pessoa1.falar();

export default 1;
