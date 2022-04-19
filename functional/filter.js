const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = (el) => el > 0 // Filtrando maiores que zero
const greaterThanTen = (el) => el > 10 // Filtrando maiores que dez
const even = (el) => el % 2 === 0 // Filtrando pares

console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanTen))
console.log(numbers.filter(even))

// Filter em array de objetos
const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

const greatStudent = (student) => student.score >= 9 // Filtrando atributos score do array students que forem maior igual a  9
console.log(students.filter(greatStudent))
