/* eslint-disable */
// Tipos básicos (Aqui ocorre infêrencia de tipos)
let nome: string = 'Augusto' // Qualquer tipo de string "" '' ``
let idade: number = 19 // 20, -10, 5.0, -2.3, 0o7744, 0b1010
let adulto: boolean = true // True ou False
let simbolo: symbol = Symbol('Qualquer simbolo') // Symbol

//Arrays
let arrayDeNumeros: Array<number> = [10, 20, 30]
let arrayDeNumeros2: number[] = [10, 20, 30]
let arrayDeStrings: Array<string> = ['a', 'b', 'c']
let arrayDeStrings2: string[] = ['a', 'b', 'c']

// Objetos
let pessoa: { nome: string, idade: number, adulto?: Boolean } = {
  nome: 'Augusto',
  idade: 19
}

// Funções
function somar(x: number, y: number) {
  return x + y // O TypeScript já sabe que isso deve retornar um number
}
let resultado = somar(2, 3) // 5

const somar2: (x: number, y: number) => number = (x, y) => x + y
let resultado2 = somar2(10, 20) // 30

