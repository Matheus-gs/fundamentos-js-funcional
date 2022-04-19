/**
 * O método map gera um novo array a partir de um array já existente
 */

const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map(function (elemento) {
    return elemento * 2 // Me retorna um novo array com os valores do primeiro array multiplicados por 2, esse array está sendo atribuido a variável numbersV2
})

const numbersV3 = numbers.map((elemento) => elemento * 4) // Forma reduzida

// Por dentro da função map
const numbersV4 = []
for (let n of numbers) {
    numbersV4.push(n * 2)
}

console.log(numbers, numbersV2, numbersV3, numbersV4)


// Map em array de objetos
const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

const getScore = (el) => el.score // Referência de onde se encontra o valor da nota 
const score = students.map(getScore) // Utilizando o map para pegar as notas e inserir no novo array score

console.log(score)
