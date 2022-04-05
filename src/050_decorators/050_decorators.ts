@decorator
class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(args);
      this.nome = this.reverte(args[0]);
      this.cor = this.reverte(args[1]);
    }

    reverte(valor: string) {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Gato', 'Amarelo');
console.log(animal);

export default 1;
