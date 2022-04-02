type Resultado = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<Resultado> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((value) => console.log(value + 1));
myPromise().then((value) => console.log(value + 2));
