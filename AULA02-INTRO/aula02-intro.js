//Função Concat
// const alunos = ["Felipe", "Pedro"]
// const alunas = ["Rafaela", "Sofia"]
// const professores = ["Cristina", "João"]

// const todos = alunos.concat(alunas).concat(professores)

// console.log(todos)

// const alunos = ["Felipe", "Pedro", "Rafaela", "Amanda", "Ana"];
// alunos.forEach(function(nome,indice){
//     console.log(nome,indice)
// })

// console.log(alunos);

// alunos.pop()
// alunos.shift()

// alunos.splice(0,1,"Gustavo","Mateus","Alex")
// delete alunos[1]

// //Ordenando vetor
// alunos.sort()
// console.log(alunos);

//Add elementos no array
// alunos.push("Guilherme")
// console.log(alunos)

//Filter
const carros = [
    {modelo:"C180",preco:120000,ano:2022,flex:false},
    {modelo:"Onix",preco:25000,ano:2015,flex:true},
    {modelo:"Uno",preco:11000,ano:2006,flex:false},
    {modelo:"Fusca",preco:50000,ano:1990,flex:false}
]

console.log(carros.filter(function(e){
    return e.ano>2020 && e.flex == false
}))

