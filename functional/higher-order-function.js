/*
 * Quando Podemos:
 *
 * Passar a função como parâmetro para outra função
 * Retornar uma função a partir de outra
 * Utilizar uma função para operar em outras funções
 */

function run(fn) {
    return fn()
}

function sayHello() {
    console.log('Hello!!')
}

run(sayHello)

run(() => console.log('Run!!!'))

const result = run(Math.random)
console.log(result)
