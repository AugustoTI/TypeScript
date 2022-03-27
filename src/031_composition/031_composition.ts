class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  desligar(): void {
    this.motor.desligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }
}

class Motor {
  ligar(): void {
    console.log('O Motor está ligado');
  }

  desligar(): void {
    console.log('O motor está desligado');
  }

  acelerar(): void {
    console.log('Acelerando');
  }

  parar(): void {
    console.log('Parando');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();

export default 1;
