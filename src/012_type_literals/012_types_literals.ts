let a = 10 // eslint-disable-line
a = 20; // ✅

// defino um tipo literal para essa variavel e ela não pode mais ser alterada
let b: 10 = 10 // eslint-disable-line
b = 20; // ❌

// eu declaro que essa variavel vai ter um comportamento do tipo `const`
let c = 20 as const // eslint-disable-line
c = 'teste'; // ❌

const d = 20; //
d = 21; // ❌
