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

// Função turma
function turmas(){

    const turma_1 = new Turma('2° serie', 201, [], [])
    const turma_2 = new Turma('3° serie', 301, [], [])
    const turma_3 = new Turma('4° serie', 401, [], [])
    const turma_4 = new Turma('5° serie', 501, [], [])

    return [turma_1, turma_2, turma_3, turma_4]
}


while(true){
    const menu = input.question('(1) Turmas -- (2) Professores -- (3)Alunos -- (4)Sair\n')

    // Turmas
    if( menu == 1 ){
        const menu_turmas = input.question('(1) Mostrar Turmas -- (2) Buscar por turma\n')

        switch(menu_turmas){
            case '1': 
                turmas().forEach(t => console.log(`Serie: ${t.nome}, Numero: ${t.numero}, Professor: ${t.getProf}`))
                break

            case '2':
                const num_turma = input.question('Numero da turma:\n')
                let busca = turmas().filter(nt => nt.numero == num_turma)
                console.log(busca)
                    break
        }
    }

    // Professores
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
