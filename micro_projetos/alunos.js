const input = require('readline-sync')

const listaAlunos = []

function Aluno(nome, idade){
    this.nome = nome,
    this.idade = idade,

    this.getNota = (n1, n2, trab) => {
        n1,
        n2,
        trab
    }

}

while(true){

    let novoAluno = input.question('Cadastra novo Aluno? S/N: ')

    if(novoAluno == 's'){
        const nome = input.question('Nome do aluno: ')
        const idade = input.question('Idade do aluno:\n ')

        let aluno = new Aluno(nome, idade)
        listaAlunos.push(aluno)

        console.log(listaAlunos)
    }

    else if(novoAluno == 'n'){
        break
    }
}



