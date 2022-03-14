// Array<T> - T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc: number, value: number) => value * acc, 1);
}

export function juntarStrings(...args: string[]): string {
  const arrayString = args.map((value) => value);
  return arrayString.join(' ');
}

console.log(multiplicaArgs(1, 2, 4, 10, 20));
console.log(juntarStrings('Eu', 'andei', 'muito', 'até', 'chegar', 'aqui'));
