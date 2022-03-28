interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Augusto',
  sobrenome: 'César',
  enderecos: ['Av. Rua do fulano'],
};

console.log(pessoa);

export default 1;
