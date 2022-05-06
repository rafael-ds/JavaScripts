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

// Lista que recebe os nomes dos professores que são cadastrados
let listaProf = []

// Função turma
function turmas(){

    const serie_2 = listaProf.filter(pf => pf.turma == 201)
    const serie_3 = listaProf.filter(pf => pf.turma == 301)
    const serie_4 = listaProf.filter(pf => pf.turma == 401)
    const serie_5 = listaProf.filter(pf => pf.turma == 501)

    // Funções que retornam somente o nome do professor
    function nome_prof(){
        for(i in serie_2){
            return serie_2[i].nome
        }
    }

    function nome_prof2(){
        for(i in serie_3){
            return serie_3[i].nome
        }
    }

    function nome_prof3(){
        for(i in serie_4){
            return serie_4[i].nome
        }
    }

    function nome_prof4(){
        for(i in serie_5){
            return serie_5[i].nome
        }
    }


    const turma_1 = new Turma('2° serie', 201)
    turma_1.Prof = nome_prof()

    const turma_2 = new Turma('3° serie', 301)
    turma_2.Prof = nome_prof2()

    const turma_3 = new Turma('4° serie', 401)
    turma_3.Prof = nome_prof3()

    const turma_4 = new Turma('5° serie', 501)
    turma_4.Prof = nome_prof4()

    // return [turma_1]
    return [turma_1, turma_2, turma_3, turma_4]
}

// Função Professores
function professores(){

    console.log(`========= Painel dos professores =========`)

    const menu_prof = input.question('(1)Cadastrar -- (2)Editar  -- (3)Excluir -- (4)Buscar por nome')

    switch(menu_prof){
        case '1':
            const nome = input.question('Nome do professor(a):\n')
            const turma = input.question('Turma:\n')

            const prof = new Professor(nome, turma)
            listaProf.push(prof)
            break

        case '2':
            console.log('editar')
            break

        case '3':
            console.log('excluir')
            break

        case '4':
            console.log('buscar')
            console.log(listaProf)
            break

        default:
            console.log('Não foi possivel realizar a operação')

    }

}

while(true){
    const menu = input.question('(1) Turmas -- (2) Professores -- (3)Alunos -- (4)Sair\n')

    // Turmas
    if( menu == '1' ){
        console.log(`\n========= Painel Turmas =========`)
        const menu_turmas = input.question('(1) Mostrar Turmas -- (2) Buscar por turma\n')

        switch(menu_turmas){
            case '1': 
                turmas().forEach(t => console.log(`Serie: ${t.nome}, Numero: ${t.numero}, Professor: ${t.Prof}`))
                console.log('')
                break

            case '2':
                const num_turma = input.question('Numero da turma:\n')
                const busca = turmas().filter(nt => nt.numero == num_turma)
                console.log(busca)
                console.log('')
                break
        }
    }

    // Professores
    else if( menu == '2' ){
        professores()
    }
    // Alunos
    else if( menu == '3' ){
        console.log('alunos')
    }
    else if( menu == '4' ){
        break
    }
    
}
