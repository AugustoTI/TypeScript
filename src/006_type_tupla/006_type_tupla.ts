const dadosCliente1: [number, string] = [1, 'Augusto'];
const dadosCliente2: [number, string, string?] = [1, 'Augusto'];
const dadosCliente3: readonly [number, string] = [1, 'Augusto'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Augusto'];

dadosCliente1[0] = 20; // ✅ é do tipo Number
dadosCliente1[1] = 40; // ❌ Não é do tipo String

dadosCliente2[2] = 'César'; // ✅ Pode ou não ter um valor do tipo string

dadosCliente3[0] = 'Fernando'; // ❌ Não pode ser alterado, pois é somente leitura

// Aceita vários valores que sejam do tipo string
dadosCliente4[2] = 'A'; // ✅
dadosCliente4[3] = 'B'; // ✅
dadosCliente4[4] = 'C'; // ✅
