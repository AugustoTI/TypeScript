class Pessoa<T, N> {
  constructor(public nome: T, public idade: N) { }
}

class Stack<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.isEmpty()) return;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];

    return elemento;
  }

  get length(): number {
    return this.contador;
  }

  isEmpty(): boolean {
    return this.contador === 0;
  }

  showStack(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const minhaPilha = new Stack<string | number>();
minhaPilha.push(1);
minhaPilha.push('ABC');
minhaPilha.push(100);
minhaPilha.showStack();
const elementoRemovido = minhaPilha.pop();
console.log(elementoRemovido);

export default 1;
