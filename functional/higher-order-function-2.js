/**
 * Uma função que recebe um parâmetro tax (imposto) e retorna uma função anônima que recebe o preco e retorna o calculo do preço + imposto
 * 
 * Vantagem: maior reuso
 */
function finalPrice(tax) {
    return function (price) {
        return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.0875) //Atribuindo o valor 0.0875 ao parâmetro tax

console.log(nycFinalPrice(25.1))  // Chamando a função atribuindo valores ao parametro price
console.log(nycFinalPrice(21.7)) // Chamando a função atribuindo valores ao parametro price
console.log(nycFinalPrice(107.9)) // Chamando a função atribuindo valores ao parametro price

// A chamada sem a constante nycFinalPrice ficaria console.log(  finalPrice(tax)(price)  )
