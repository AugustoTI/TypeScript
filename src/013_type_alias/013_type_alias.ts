type Idade = number;

type Pessoa = {
  nome: string;
  idade: number;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Majenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Augusto',
  idade: 19,
  salario: 3000,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida) {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));

export default 1;
