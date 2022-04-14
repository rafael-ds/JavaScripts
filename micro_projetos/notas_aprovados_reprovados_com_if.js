/* Pequeno sistema em JS e node que tem como 
objetivo receber notas de um aluno e verificar se o mesmo 
esta aprovado, em recuperação ou reprovado. */

function notas(nota_a, nota_b, nota_c, nota_d, nota_trabalho ){

    soma = nota_a + nota_b + nota_c + nota_d + nota_trabalho
    media = soma / 4
    return media

}

nota_final = notas(5, 8, 2, 7, 1.8)

if (nota_final >= 7){
    console.log(`Nota: ${nota_final}`)
    console.log('Situação: Aprovado')
} 
else if(nota_final >= 5 && nota_final < 7){
    console.log(`Nota: ${nota_final}`)
    console.log('Situação: Recuperação')

}
else if(nota_final < 5){
    console.log(`Nota: ${nota_final}`)
    console.log('Situação: Reprovado')

}