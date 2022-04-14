/* Pequeno sistema em JS e node usando a condicional switch, que tem como 
objetivo receber notas de um aluno e verificar se o mesmo 
esta aprovado, em recuperação ou reprovado. */

function resultado(notas){
    switch (notas) {
        case 10: case 9: case 8: case 7:
            console.log(`Nota: ${notas}`)
            console.log('Situação: Aprovado')

            break

        case 6: case 5: case 4:
            console.log(`Notas: ${notas}`)
            console.log('Situação: Recupedação')
            break

        case 3: case 2: case 1: case 0:
            console.log(`Notas: ${notas}`)
            console.log('Situação: Reprovado')
            break

        default:
            console.log('Nota invalida')


    }
}

resultado(3)
