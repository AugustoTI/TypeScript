type CoresObj = typeof coresOBJ;
type CoresKey = keyof CoresObj;

const coresOBJ = {
  azul: 'blue',
  verde: 'green',
  vermelho: 'red',
};

function traduzirCor(cor: CoresKey, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresOBJ));
