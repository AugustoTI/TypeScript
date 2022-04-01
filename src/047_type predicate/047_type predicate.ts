function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function soma<T>(...args: T[]): number {
  const resultado = args.reduce((acc, value) => {
    if (isNumber(acc) && isNumber(value)) {
      return acc + value;
    }
    return acc;
  }, 0);

  return resultado;
}

console.log(soma(1, 2, 3, 4));
console.log(soma('a', 'b', 'c'));
console.log(soma(1, 2, 3, 'a'));
console.log(soma(...[1, 2, 3, 'a']));
