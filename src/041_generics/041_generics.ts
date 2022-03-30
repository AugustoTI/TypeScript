type FilterArray<U> = (value: U, index?: number, array?: U[]) => boolean;

function filterArray<T>(array: T[], callback: FilterArray<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i]);
    if (result) newArray.push(array[i]);
  }
  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a'];

const arrayFiltrado = filterArray(array, (value) => value < 5);
console.log(arrayFiltrado);
