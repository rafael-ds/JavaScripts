const classe = ['João', 'Maria', 'Pedro', 'Ana', 'Rogerio', 'Lais', 'Eduardo',
'Adrianno', 'Edna', 'Kira'
]

const turma_308 = [
    {aluno: 'joão', nota: 3.8},
    {aluno: 'Jessica', nota: 8.9},
    {aluno: 'Ana', nota: 9.4},
    {alunos: 'Pedro', nota: 6.4},
]

let alunos_repr = turma_308.filter(n => n.nota < 4.0 )
let alunos_recup = turma_308.filter(n => n.nota > 4.0 && n.nota < 7.0)
let alunos_aprov = turma_308.filter(n => n.nota > 7.0)

console.log(`Alunos reprovados`)
console.log(alunos_repr)

console.log(`-----------------`)
console.log(`Alunos em recuperação`)
console.log(alunos_recup)

console.log(`-----------------`)
console.log(`Alunos em aprovados`)
console.log(alunos_aprov)



