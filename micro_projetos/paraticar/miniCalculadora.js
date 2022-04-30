const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('------ Mini Calculadora ------')
console.log('Use + para somar')
console.log('Use - para subtrair')
console.log('Use * para multiplicar')
console.log('Use / para dividir')
console.log('------------------------------\n')

let num = 56

function operador(o){
    if(o == '+'){
        lista.forEach(n => console.log(`${n} + ${num} = ${n + num}`)) 
    }
    else if(o == '-'){
        lista.forEach(n => console.log(`${n} - ${num} = ${n - num}`))
    }
    else if(o == '/'){
        lista.forEach(n => console.log(`${n} / ${num} = ${n / num}`))
    }
    else if(o == '*'){
        lista.forEach(n => console.log(`${n} * ${num} = ${n * num}`))
    }
}

operador('/')