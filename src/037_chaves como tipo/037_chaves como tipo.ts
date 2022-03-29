type Veiculo = {
  marcar: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marcar'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  name: 'Fusca',
  brand: 'Honda',
  year: 1987,
};

console.log(carro);
