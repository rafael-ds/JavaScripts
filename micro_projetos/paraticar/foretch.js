// Praticando forEach

// ----- Mini Tabuada -----
// tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tabuada.forEach(function(n){
//     console.log(`${n} + ${n} = ${n + n}` )
// }

const alunos = ['João', 'Maria', 'Pedro', 'Ana', 'Rogerio', 'Lais', 'Eduardo',
'Adrianno', 'Edna', 'Kira'
]

alunos.forEach( (aluno, indice) => console.log(`${indice+1}) ${aluno}`))

// const lista = alunos.forEach(function(a, i){
//     console.log(`${i+1}) ${a}`) 
// })


// for(let i = 0; i < alunos.length; i++){
//     console.log(`${i}) ${alunos[i]}`)
// }