// interface TipoPessoa {
//   nome: string;
//   sobrenome: string;
//   nomeCompleto(): string;
// }

interface PessoaNome {
  nome: string;
}

interface PessoaSobrenome {
  sobrenome: string;
}

interface PessoaNomeCompleto {
  nomeCompleto(): string;
}

interface TipoPessoa extends PessoaNome, PessoaNomeCompleto, PessoaSobrenome { }

class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) { }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Augusto', 'César');
pessoa.nomeCompleto();

export default 1;
