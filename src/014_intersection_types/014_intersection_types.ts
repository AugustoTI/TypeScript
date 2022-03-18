type temNome = { nome: string };
type temIdade = { idade: number };
type temSobrenome = { sobrenome: string };

type Pessoa = temNome & temIdade & temSobrenome;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';

type intercection = AB & AC & AD;

const pessoa: Pessoa = {
  idade: 19,
  nome: 'Augusto',
  sobrenome: 'César',
};

console.log(pessoa);

// Module Mode
export default 1;
