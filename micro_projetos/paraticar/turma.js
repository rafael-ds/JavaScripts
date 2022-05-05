// function Aluno(nome, idade){
//     this.nome = nome,
//     this.idade = idade
// }

const listaAlunos = [
    { Nome: 'Angelica', Idade: 6 },
    { Nome: 'nathalia', Idade: 4 },
    { Nome: 'Jesica', Idade: 3 },
    { Nome: 'Jordan', Idade: 2 },
    { Nome: 'Bento', Idade: 5 },
    { Nome: 'Manu', Idade: 3 },
    { Nome: 'Josimar', Idade: 5 },
    { Nome: 'Icaro', Idade: 4 },
    { Nome: 'Noemia', Idade: 10 },
    { Nome: 'Cassios', Idade: 8 },
    { Nome: 'Camila', Idade: 7 },
    { Nome: 'Milena', Idade: 5 },
    { Nome: 'Jorge', Idade: 9 },
    { Nome: 'Rafael', Idade: 5 },
    { Nome: 'Raquel', Idade: 4 },
]

const idade_nv1 = listaAlunos.filter(n => n.Idade <= 4)
const idade_nv2 = listaAlunos.filter(n => n.Idade >= 5 && n.Idade <= 7)
const idade_nv3 = listaAlunos.filter(n => n.Idade >= 8 && n.Idade <= 10)

function Turma(serie, numero, alunos){
    this.serie = serie,
    this.numero = numero 
    this.alunos = alunos
}

const turma1 = new Turma('2° Série', 201, idade_nv1)
const turma2 = new Turma('3° Série', 301, idade_nv2)
const turma3 = new Turma('4° Série', 402, idade_nv3)

console.log(turma1.alunos)
console.log(turma2.alunos)
console.log(turma3.alunos)