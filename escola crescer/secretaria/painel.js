const Aluno = require('./alunos/aluno')
const Professor = require('./professores/professor')
const Turma = require('./turmas/turma')

const input = require('readline-sync')

console.log(`
=============================================================
|                      Escola Crescer                       |
=============================================================
                 ****** Secretaria ******
`)


while(true){
    const menu = input.question('(1) Turmas -- (2) Professores -- (3)Alunos -- (4)Sair\n')

    if( menu == 1 ){
        console.log('turmas')
    }
    else if( menu == 2 ){
        console.log('prof')
    }
    else if( menu == 3 ){
        console.log('alunos')
    }
    else if( menu == 4 ){
        break
    }
    
}
