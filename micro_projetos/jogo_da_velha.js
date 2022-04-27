const input = require('readline-sync')

console.log(`
===================================
|       Adivinhe a Palavra        |
===================================
`)

//const lista = ['c', 'a', 's', 'a']
const palavraSecreta = 'casa'
let listaAcerto = []

let contador = 0
let pontos = 0

console.log(`
|************   Dica    ************|
-- A plavra contem ${palavraSecreta.length} letras --
`)

while(contador < palavraSecreta.length){
    lt = input.question('Informe uma letra:\n ')

    if(palavraSecreta.includes(lt)){
        console.log(`Parabéns! você acaba de encontrar a letra: ${lt.toUpperCase()}`)

        pontos += 10
        listaAcerto.push(lt)

        console.log(listaAcerto)
        console.log(`Sua Pontuação é: ${pontos}\n`) 
        
        dizerPalavra = input.question('Voce ja sabe a palavra? S/N: ')

        if(dizerPalavra == 's'){
            escrever = input.question('Escreva a palavra: ')

            if(escrever == palavraSecreta){
                console.log(`
                Parabéns você acertou.
                Sua Pontuação é ${pontos + 50}
                `)
                break
            }
            else{
                console.log(`
                    OPS!!! A palavra não é essa. Você perdeu 10pts
                    ${pontos - 10}
                `)
            }
        }
    }
    else{
        console.log(`A palavra não contem a letra: ${lt}\n`)
    }

    contador++
}


