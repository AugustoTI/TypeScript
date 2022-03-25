abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected HP: number,
  ) { }

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(pontosDeAtaque: number): void {
    this.HP -= pontosDeAtaque;
    console.log(`Agora ${this.nome} tem ${this.HP} pontos de vida`);
  }

  abstract bordao(): void;
}

class Guerreiro extends Personagem {
  bordao(): void {
    console.log('Guerreira ao ataqueeeeee!!' + '');
  }
}

class Monstro extends Personagem {
  bordao(): void {
    console.log('Ghuaaaaa');
  }
}

const guerreira = new Guerreiro('Maria', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);

export default 1;
