const input = require('readline-sync')

const lista = ['c', 'a', 's', 'a']
let lsitaAcertos = []

let contador = 0
let pontos = 0

while(contador < lista.length){
    letra = input.question('Informe uma letra: ')
    
    if(lista.includes(letra)){
        console.log(`Parabens! você acaba de encontrar a letra: ${letra.toUpperCase()}`)

        pontos += 10
        console.log(`Sua Pontuação: ${pontos}\n`)        
    }
    else{
        console.log(`A palavra não contem a letra: ${letra}`)
    }

    contador++
}


