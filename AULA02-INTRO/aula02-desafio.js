//Crie uma função que retorne dois numeros e retorne a soma, subtração, multiplicação e divisão desses números em um objeto

function calcOperacoes(num1,num2){
    return{
        soma: num1+num2,
        subtracao: num1-num2,
        multiplicacao: num1*num2,
        divisao: num1/num2
    }
}

console.log(calcOperacoes(5,2));

//Crie uma função que receba um numero e que retorne "Positivo" se o numero for maior que 0, "Negativo" se for menor que 0 e "Zero" se o numero for igual a 0, usando o operador ternário

function calcNumero(num){
    return num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Zero";
}

console.log(calcNumero(0));

//Crie uma função que receba um array de objetos representando pessoas, cada um contendo nome, idade e profissão. Use destructuring para acessar as propriedades e filtre as pessoas que são maiores de idade e têm a profissão de "Desenvolvedor", retornando um novo array com esses dados.

const pessoas = [
    {nome:"João", idade:25, profissao:"Desenvolvedor"},
    {nome:"Maria", idade:19, profissao:"Designer"},
    {nome:"Carlos", idade:17, profissao:"Desenvolvedor"},
    {nome:"Ana", idade:22, profissao:"Desenvolvedor"},
]

console.log(pessoas.filter((e)=>{
    return e.idade >= 18 && e.profissao == "Desenvolvedor"
}))

