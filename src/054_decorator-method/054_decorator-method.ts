function decorador(
  classPrototype: any,
  nameMethod: string,
  description: PropertyDescriptor,
) {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(description);
  return {};
}

class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorador
  metodo(msg: string): string {
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
novaPessoa.metodo = () => 'Ola mundo';
const message = novaPessoa.metodo('Uma mensagem qualquer');
console.log(message);

export default 1;
