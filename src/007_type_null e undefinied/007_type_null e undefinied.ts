function createPerson(
  fistName: string,
  lastName?: string,
): {
  fistName: string;
  lastName?: string;
} {
  return {
    fistName,
    lastName,
  };
}

const person = createPerson('Augusto');
console.log(person);

function squareOF(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

console.log(squareOF(2));

const valor1 = squareOF('2');
if (valor1 === null) {
  console.log(valor1, valor1 * 2);
} else {
  console.log(valor1 * 2);
}
