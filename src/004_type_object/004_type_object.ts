// Uma vez que acontence a infêrencia de tipos, não pode mudar
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor'; // ✅
objetoA.chaveB = 20; // ❌
objetoA.chaveC = [1, 2, 3, 4]; // ❌

////////////////////////////////////////////////////////////////////////////////
const objetoB: {
  chaveA: string;
  chaveB: number;
  chaveC?: number[];
} = {
  chaveA: 'ValorA',
  chaveB: 20,
};
objetoB.chaveC = [20, 3, 4]; // ✅
////////////////////////////////////////////////////////////////////////////////
const objetoC: {
  chaveA: string;
  [key: string]: unknown;
} = {
  chaveA: 'ValorA',
};

objetoC.chaveA = 'Outra coisa'; // ✅
objetoC.chaveD = 20; // ✅
objetoC.chaveF = ['a', 'b', 'c']; // ✅
