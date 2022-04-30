// Modelo 1 de OBJ
const carro_1 = new Object

// Modelo 2 de OBJ
carro_1.modelo = 'ferrari'
carro_1.cor = 'Amarelo'
carro_1.veloc_max = 380
carro_1.fabricante = 'Ferrari'

const carro_2 = {
    modelo: 'Audi',
    cor: 'Prata',
    veloc_max: 270,
    origem: {
        pais: 'Alemanha',
        fabricante: 'Audi',
    }
}

// Modelo 3 de OBJ
function Carro(modelo, cor, veloc_max, origem){
    this.modelo = modelo,
    this.cor = cor,
    this.veloc_max = veloc_max,
    this.getOrigem = (pais, fabricante) => {
        pais = pais,
        fabricante = fabricante
    }
}
const veic1 = new Carro('EcoSport', 'Prata', 210)
veic1.getOrigem.pais = 'EUA'
veic1.getOrigem.fabricante = 'FORD'

const veic2 = new Carro('Audi', 'Preto', 230)
veic2.getOrigem.pais = 'Alemanha'
veic2.getOrigem.fabricante = 'Audi'

console.log(veic2.getOrigem.pais)

// console.log(carro_1)

// console.log(`Carro: ${carro_2.modelo}.
// Fabricante: ${carro_2.origem.fabricante}.
// País de origem: ${carro_2.origem.pais}.`)

// console.log(carro_2.length)