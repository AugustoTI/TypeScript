// O `Unknown` é `any` mais "seguro"
// Enquanto que o `any` não liga para o tipo de dado
// O `Unknown` alerta o desenvolvedor a verificar o tipo de dado
let x: unknown;

x = 10;
x = 15;
x = '20';
x = true;
x = 'Augusto';

const y = 18;

console.log(x / y); // O TypeScript não sabe o tipo, logo, ele alerta para fazer uma checagem

if (typeof x === 'number') {
  console.log(x * y); // Uma vez checado, ele assume um tipo normalmente
} else if (typeof x === 'string') {
  console.log(x + y);
}
