enum Cores {
  vermelho, // 0
  azul, // 1
  amarelo, // 2
}

enum Cores {
  roxo = 'roxo',
  verde = 20,
  cinza,
}

console.log(Cores);

function imprimirCores(cor: Cores): void {
  console.log(Cores[cor]);
}

imprimirCores(Cores.roxo);
