const Aluno = require('./alunos/aluno')
const Professor = require('./professores/professor')
const Turma = require('./turmas/turma')

const input = require('readline-sync')
const fs = require('fs')
const { exit } = require('process')


console.log(`
=============================================================
|                      Escola Crescer                       |
=============================================================
                 ****** Secretaria ******
`)

// Lista que recebe os nomes dos professores que são cadastrados
let listaProf = []
const busca = require('./bd_secretaria.json')
busca.forEach(dados => listaProf.push(dados))

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

    return [turma_1, turma_2, turma_3, turma_4]
}
// Função Professores
function professores(){
    
    console.log(`========= Painel dos professores =========`)
    
    const menu_prof = input.question('(1)Cadastrar -- (2)Editar  -- (3)Excluir -- (4)Buscar por nome\n')
    
    switch(menu_prof){
        case '1':
            console.log(`\n******** Cadastro de Prof ********\n`)
            
            const nome = input.question('Nome do professor(a):\n')
            const turma = input.question('Turma:\n')
            
            const prof = new Professor(nome, turma)
            listaProf.push(prof)

            console.log('')
            console.log(prof)
            console.log('')
            
            const cadastrar = input.question('Confirmar cadastro: S/N\n')
            if(cadastrar == 's'){
                
                fs.writeFile(__dirname + '/bd_secretaria.json', JSON.stringify(listaProf), err => {
                    console.log(err)
                })
                console.log('Cadastro realizado com sucesso! ')
                
            }
            
            break
            
            case '2':
                console.log(`\n******** Menu edição de Prof.(a) ********\n`)
                
                const nome_prof = input.question('Informe o nome do professor: ')
                const busca = listaProf.filter(p => p.nome == nome_prof)
                busca.forEach(n => console.log(`Prof.(a): ${n.nome}\nTurma: ${n.turma}`))
                console.log('')
            
            const editar = input.question('(1) Editar nome -- (2) Editar turma: ')
            console.log('')
            
            switch(editar){
                case '1':
                    const novo_nome = input.question('Novo nome: ')
                    
                    busca.forEach(editar => editar.nome = novo_nome)
                    
                    const conf_nome = input.question('Confirar atualizacao: S/N\n')
                    
                    if(conf_nome == 's'){
                        fs.writeFile(__dirname + '/bd_secretaria.json', JSON.stringify(listaProf), err => {
                            console.log( err )
                        })
                        console.log('Atualização realizada com sucesso! ')
                        
                    }
                    break
                    
                    case '2':
                        const nova_turma = input.question('Nova Turma: ')                        
                        busca.forEach(editar => editar.turma = nova_turma)
                        
                        const conf_turma = input.question('Confirar atualizacao: S/N\n')
                        
                        if(conf_turma == 's'){
                            fs.writeFile(__dirname + '/bd_secretaria.json', JSON.stringify(listaProf), err => {
                                console.log( err )
                            })
                            console.log('Atualização realizada com sucesso! ')
                            
                        }
                    }
                    
        break
        
        case '3':
            console.log(`\n******** Excluir Prof ********\n`)
            
            const excluir_prof = input.question('Nome: ')
            const confimar_excluir = input.question('Excuir? S?N: ')
            console.log('')
            // console.log(listaProf.filter(p => p.nome == excluir_prof))
            // console.log('')

            if(confimar_excluir == 's'){
                
                const dados = listaProf.filter(n => n.nome !== excluir_prof )

                listaProf = []
                dados.forEach(d => listaProf.push(d))

                fs.writeFile(__dirname + '/bd_secretaria.json', JSON.stringify(listaProf), err => {
                    console.log(err)
                })
                console.log('Item excuido com sucesso! ')
            }

            break

        case '4':
            console.log(`\n******** Buscar de Prof ********\n`)
            const busca_prof = input.question('Nome do professor: ')
            const dado = listaProf.filter(d => d.nome == busca_prof)
            console.log('')
            dado.forEach(i => console.log(`Prof.(a): ${i.nome},\nTurma: ${i.turma}`))
            console.log('')
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
            
                console.log(`\n******** Turmas ********\n`)                
                turmas().forEach(t => console.log(`Serie: ${t.nome}, Numero: ${t.numero}, Professor: ${t.Prof}`))
                console.log(`\n************************\n`)
                console.log('')
                break

            case '2':
                const num_turma = input.question('Numero da turma:\n')
                const busca = turmas().filter(nt => nt.numero == num_turma)
                
                console.log('')
                console.log('************************************')
                busca.forEach(t => console.log(`Serie: ${t.nome}\nNumero: ${t.numero}\nProf(a).: ${t.Prof}\nAlunos: ${t.Alunos}`))
                console.log('************************************')
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
