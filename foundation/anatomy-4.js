// Anatomia da Função #04

// Anonymous Function
// IIFE - Immediately Invoked Function Expression
;(function (a, b, c) {
    console.log(`Result = ${a + b + c}`)
})(1, 2, 3)

// IIFE - With Arrow Anatomy
;((a, b, c) => {
    console.log(`Result = ${a + b + c}`)
})(1, 2, 3)
