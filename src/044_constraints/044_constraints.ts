type Objeto = <O, K extends keyof O>(Objeto: O, Key: K) => O[K];

const objeto = {
  chave1: 'Valor1',
  chave2: 'Valor2',
};

const obterChave: Objeto = (objeto, chave) => objeto[chave];

const valorChave = obterChave(objeto, 'chave1');
console.log(valorChave);
