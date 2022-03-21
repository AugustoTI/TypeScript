export class Empresa {
  public readonly nome: string; // A palavra `public` não é necessária
  private readonly colaboradores: Colaborador[] = [];
  protected readonly CNPJ: string;

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

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) { }
}

const empresa1 = new Empresa('YouTube', '11.111.11/0001-11');
const colaborador1 = new Colaborador('Augusto', 'César');
const colaborador2 = new Colaborador('Luiz', 'Otávio');
const colaborador3 = new Colaborador('Wesley', 'Viera');
console.log(empresa1);
console.log(empresa1.nome);
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
console.log(empresa1);
console.log(empresa1.mostrarColaboradores());
