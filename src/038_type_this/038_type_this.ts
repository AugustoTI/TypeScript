class Calculadora {
  constructor(public numero: number) { }

  add(n: number): this {
    this.numero += n;
    return this;
  }

  mult(n: number): this {
    this.numero *= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }
}

class SubCalculadora extends Calculadora {
  pon(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(5);
calculadora.add(5).mult(2).pon(2);
console.log(calculadora);

//Padrão de projeto: Builder
class ResquestURL {
  private method: 'GET' | 'POST' | null = null;
  private URL: string | null = null;

  setURL(url: string): this {
    this.URL = url;
    return this;
  }

  setMethod(method: 'GET' | 'POST'): this {
    this.method = method;
    return this;
  }

  send(): void {
    console.log('Resquisação enviada com sucesso');
  }
}

const resquest = new ResquestURL();
resquest.setMethod('GET').setURL('https://www.google.com.br').send();
