class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected CPF: string,
  ) { }

  pegarIdade(): number {
    return this.idade;
  }

  pegarCPF(): string {
    return this.CPF;
  }

  pegarNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    CPF: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, CPF);
  }

  pegarNomeCompleto(): string {
    const result = super.pegarNomeCompleto();
    return result;
  }
}
class Cliente extends Pessoa {
  pegarNomeCompleto(): string {
    return `Isso vem do Cliente ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Augusto', 'César', 19, '000.000.00-00');
const cliente = new Aluno('Augusto', 'César', 19, '000.000.00-00', 'sala 20');
const aluno = new Cliente('Augusto', 'César', 19, '000.000.00-00');

console.log(pessoa.pegarNomeCompleto());
console.log(cliente.pegarNomeCompleto());
console.log(aluno.pegarNomeCompleto());

export default 1;
