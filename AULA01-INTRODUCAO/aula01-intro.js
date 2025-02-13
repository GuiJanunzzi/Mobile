// function mensagem(nome){
//     console.log("Olá " + nome)
// }

// mensagem("Guilherme")

// function soma(num1,num2){
//     return num1+num2
// }

// console.log(soma(5,6));

// (function(){
    //     console.log("Sou uma função anônima")
    // })
    
// const multi = function(num1,num2){
//     return num1*num2
// }

// let resultado = multi(5,2)
// console.log("Resultado da multiplicação: " + resultado)

//Com arrow function - primeiro modo
// const multiV2 = (num1,num2) => {
//     return num1*num2
// }

//Com arrow function - segundo modo
// const multiV3 = (num1,num2) => num1*num2

//Funções com parametros REST
const soma = (...numeros) => {
    let aux = 0
    for(i of numeros){
        aux++
    }
    return aux;
}

const numbers = [6,7,4]
console.log("REST: ", soma(...numbers)) 