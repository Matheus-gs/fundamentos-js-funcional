/**
 * Reduce => fn(total, elemento), total é o nosso acumulador e começa com o valor inicial igual a 0, para cada interação com o elemento o total é incrementado
 * fn(total, el) => total + el // A partir da primeira execução total na segunda execução já vai ter o valor de total + el e não mais 0 como inicialmente
 * Consegue somar todos os elementos do array
 *
 * Cria um novo array com os valores gerados a partir dos parametros
 */

const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, elemento) => total + elemento
const avg = (acumulador, elemento, indice, array) => indice == array.length - 1 ? (acumulador + elemento) / array.length : acumulador + elemento

const total = numbers.reduce(sum)
const resultado = numbers.reduce(avg)

console.log(numbers, total, resultado)


