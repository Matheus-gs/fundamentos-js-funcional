const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
]

const greatStudent = (student) => student.score >= 9
const getScore = (el) => el.score

const avg = (acumulador, elemento, indice, array) =>
    indice == array.length - 1
        ? (acumulador + elemento) / array.length
        : acumulador + elemento

const awesomeStudent = students.filter(greatStudent).map(getScore).reduce(avg) // Calculando a média das maiores notas utilizando map, filter & reduce
console.log(awesomeStudent)