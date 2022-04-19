// Parâmetros

function logParams(a, b, c) {
    console.log(`${a} ${b} ${c}`)
}

logParams(1, 2, 3, 4)
logParams(1, 2, 3)
logParams(1, 2)
logParams(1)
logParams()

// Parâmetros padrão
function defaultParams(a = 0, b = 0, c = 3) {
    console.log(`${a} ${b} ${c}`)
}

defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)
defaultParams(0)

// Passagem dinâmica de parâmetros (Passando quantos parâmetros quiser e obtendo retorno sobre todos eles)
function logNums(...nums) {
    // Uso do spread operator (Dessa forma a função recebe um quantia variável de parâmetros) e atribuimos os valores ao vetor 'nums'
    console.log(nums)
}

logNums(1, 2, 3, 4, 5, 6)

function sumAll(...nums) {
    let total = nums.reduce((a, b) => a + b)
    return total
}

console.log(sumAll(2,2,2,2))