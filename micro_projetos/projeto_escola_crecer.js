const input = require('readline-sync')

console.log(`
=========================================
|            Escola Crescer             |
=========================================

- Painel de Controle de Alunos e Turmas -
`)

// Are da Turma
const listaTurmas = []
const listaAlunos = []

// Obj Turma
function Turma(serie, numero, mediaIdade){
    this.serie = serie,
    this.numero = numero
    this.mediaIdade = mediaIdade
}

// Obj Alunos
// function Aluno(nome, idade){
//     this.nome = nome,
//     this.idade = idade,

//     this.notas = (n1, n2, n3, n4, tb) => {
//         n1, n2, n3, n4, tb
//     }
// }

while(true){

    const cadastrar = input.question('Cadastrar Turma (1) - Cadastrar Aluno (2) ')

    // Cadastro de turmas
    if(cadastrar == 1){

        console.log(`
         ---------------------------------------------
         |                Turmas                     |
         ---------------------------------------------
            (1) 201 - (2) 301 - (3) 401 - (4) 501
        `)

        const turmas = input.question('Criar turma: ')

        if(turmas == 1){
            const serie = '2° serie'
            const numeroTurma = 201

            const media_idade = listaAlunos.filter(i => i.idade < 4)            
            const turma = new Turma(serie, numeroTurma, media_idade)
            listaTurmas.push(turma)
        }
        
    }
    // Cadastro de alunos
    else if(cadastrar == 2){
        const nomeAluno = input.question('Nome do Aluno: ')
        const idade = parseInt(input.question('Idade do Aluno: '))

        // OBS> objeto enjeçado
        const aluno = {
            nome: nomeAluno,
            idade: idade,
            notas: (n1, n2, n3, n4, tb) => {n1, n2, n3, n4, tb}
        }

        listaAlunos.push(aluno)
        
    }
    
    console.log(listaTurmas)
    console.log(listaAlunos)


}


// Fim Area da Turma