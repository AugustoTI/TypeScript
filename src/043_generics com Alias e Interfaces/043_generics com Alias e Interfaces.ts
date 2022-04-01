// interface Pessoa<T = string, U = number> {
//   nome: T;
//   sobrenome: T;
//   idade: U;
// }

type Pessoa<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: Pessoa<string, number> = {
  nome: 'Augusto',
  sobrenome: 'César',
  idade: 19,
};
const aluno2: Pessoa<number, number> = {
  nome: 20,
  sobrenome: 19,
  idade: 21,
};
const aluno3: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 32,
};

export default 1;
