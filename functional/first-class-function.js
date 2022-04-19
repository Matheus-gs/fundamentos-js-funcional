// First class function or First class citzen
// Função de primeira classe ou Cidadão de primeira classe

// Quando a função é tratada como qualquer outra variável
// Quando atribuimos a função para uma variável

const calc = {
    nome: 'Matheus',
    add: (a, b) => `${a} + ${b} = ${a + b}`,
    subtract: (a, b) => `${a} - ${b} = ${a - b}`,
    multiply: (a, b) => `${a} * ${b} = ${a * b}`,
    divide: (a, b) => `${a} / ${b} = ${a / b}`,
}

console.log(calc.nome)
console.log(calc.add(2, 3))
console.log(calc.subtract(5, 2))
console.log(calc.multiply(5, 3))
console.log(calc.divide(10, 2))

class Calc {
    constructor() {
        ;(this.nome = 'Matheus'),
            (this.add = (a, b) => `${a} + ${b} = ${a + b}`),
            (this.subtract = (a, b) => `${a} - ${b} = ${a - b}`),
            (this.multiply = (a, b) => `${a} * ${b} = ${a * b}`),
            (this.divide = (a, b) => `${a} / ${b} = ${a / b}`)
    }
}

const calculadora = new Calc()
console.log(calculadora.nome)
console.log(calculadora.add(2, 3))
console.log(calculadora.subtract(5, 2))
console.log(calculadora.multiply(5, 3))
console.log(calculadora.divide(10, 2))


