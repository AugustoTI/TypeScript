export const pessoa = {
  nome: 'Augusto',
  sobrenome: 'César',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};
