/*
  A palavra de acesso `public` é usada para permitir se podemos acessar o propriedade/método
  fora da classe.

  OBS:
  Na maneira de escrita tradicional das classes em TypeScript, ela é reduante, se você omitir a palavra,
  já vai ser considerado publico

  A palavra de acesso `private` vai limitar o acesso a propriedade/método somente ao escopo da classe
  Para acessar esse valor ou modifica o mesmo, poderiamos usar um método para exibir o mesmo
*/
class Exemplo1 {
  readonly nome: string; // Nesse caso, colocar a palavra `public` é redudante
  private readonly contaBancaria: number;
  constructor(nome: string, saldo: number) {
    this.nome = nome;
    this.contaBancaria = saldo;
  }
}

const pessoa1 = new Exemplo1('Augusto', 100000);
console.log(pessoa1.nome); // Acesso para qualquer usuario (somente leitura)

class Exemplo2 {
  constructor(
    public readonly nome: string,
    private readonly senhaDoBanco: number,
  ) { }
}

const pessoa2 = new Exemplo2('Bernado', 28190);
console.log(pessoa2);

export default 1;
