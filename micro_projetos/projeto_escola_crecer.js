const input = require('readline-sync')

console.log(`
=========================================
|            Escola Crescer             |
=========================================

- Painel de Controle de Alunos e Turmas -
`)

// Are da Turma
const listaTurmas = []

// Obj Turma
function Turma(serie, numero){
    this.serie = serie,
    this.numero = numero
}

function Aluno(nome, idade){
    this.nome = nome,
    this.idade = idade,

    this.getNota = (n1, n2, n3, n4, tb) => {
        n1, n2, n3, n4, tb
    }
}

while(true){

    const cadastrar = input.question('Cadastrar Turma (1) - Cadastrar Aluno (2) ')

    if(cadastrar == 1){
        const nomeTurma = input.question('Nome da Turma: ')
        const numeroTurma = input.question('Numero da Turma: ')

        const turma = new Turma(nomeTurma, numeroTurma)
        listaTurmas.push(turma)
        console.log(listaTurmas)
    }
    else if(cadastrar == 2){
        const nomeAluno = input.question('Nome do Aluno: ')
        const idade = input.question('Idade do Aluno: ')

        const aluno = new Aluno(nomeAluno, idade)
    }
}


// Fim Area da Turma