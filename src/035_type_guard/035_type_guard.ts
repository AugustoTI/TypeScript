function add(a: unknown, b: unknown) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

add(1, 2);
add(1, '3');

type Pessoa = { nome: string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
  constructor(public nome: string) { }
}

function mostrarNome(obj: PessoaOuAnimal) {
  if ('nome' in obj) console.log(obj.nome);
  if (obj instanceof Aluno) console.log(obj.nome);
}

mostrarNome(new Aluno('Augusto'));
