function Alunos(nome, idade, turma){
        this.nome = nome
        this.idade = idade
        this.turma = turma

        this.Notas = (n1, n2, n3, n4=null, tb=null) => {
            n1, n2, n3, n4, tb
        }

}

module.exports = Alunos