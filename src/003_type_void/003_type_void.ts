import { pessoa } from './mod';

function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('Augusto', 'César');
pessoa.exibirNome();
