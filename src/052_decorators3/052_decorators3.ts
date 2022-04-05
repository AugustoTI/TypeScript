@inverteNomeECor('Valor1', 'Valor2')
class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('sou a classe Animal');
  }
}

function inverteNomeECor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T) {
    console.log('sou o decorador e recebi:', target);

    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.reverte(args[0]);
        this.cor = this.reverte(args[1]);
      }

      reverte(valor: string) {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

const animal = new Animal('Gato', 'Amarelo');
console.log(animal);

export default 1;
