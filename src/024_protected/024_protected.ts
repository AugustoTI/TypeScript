export class Empresa {
  public readonly nome: string; // A palavra `public` não é necessária
  protected readonly colaboradores: Colaborador[] = [];
  private readonly CNPJ: string;

  constructor(nome: string, CNPJ: string) {
    this.nome = nome;
    this.CNPJ = CNPJ;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

class YouTube extends Empresa {
  constructor() {
    super('YouTube', '11.111.11/0001-11');
  }

  popColaborador(): Colaborador | undefined {
    const colaborador = this.colaboradores.pop();
    if (colaborador) {
      return colaborador;
    }
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) { }
}

const empresa1 = new YouTube();
const colaborador1 = new Colaborador('Augusto', 'César');
const colaborador2 = new Colaborador('Luiz', 'Otávio');
const colaborador3 = new Colaborador('Wesley', 'Viera');
console.log(empresa1);
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
empresa1.popColaborador();
console.log(empresa1);

export default 1;
