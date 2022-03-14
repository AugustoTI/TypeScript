import { pessoa } from './mod';

// O `void` diz que a função/metodo não possui um retorno.
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Augusto', 'César');
pessoa.exibirNome();
