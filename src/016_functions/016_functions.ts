type mapStringsCallback = (string: string) => string;

// Sim, isso é uma JavaScript é antigo, mas é só para fins educacionas.
function mapStrings(array: string[], callbackFn: mapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackFn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (string) => string.toUpperCase());
console.log(abcMapped);
