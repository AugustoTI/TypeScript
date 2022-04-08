function decorador(
  classPrototype: any,
  nameMethod: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
  return 'Qualquer coisa';
}

class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    @decorador nome: string,
    @decorador sobrenome: string,
    @decorador idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorador msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();

    if (!primeiroNome) return;

    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const novaPessoa = new UmaPessoa('Augusto', 'César', 19);
const message = novaPessoa.metodo('Uma mensagem qualquer');
console.log(message);

export default 1;
