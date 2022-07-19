# Ranking de Vendas

# Ranking de Vendas

# Contextualização:

# Neste cenário, você é desenvolvedor de uma empresa que presta um serviço de consultoria jurídica num modelo digital de assinaturas.



# Durante o mês, os vendedores competem em um ranking de vendas.



# O ranking obedece a um único e simples critério, a quantidade de assinaturas vendidas por cada vendedor. Não existe critério de desempate, de forma que os vendedores com o mesmo número de vendas ocupam a mesma posição no ranking.



# Por exemplo: se 5 vendedores efetuam respectivamente 30, 12, 30, 18 e 12 vendas, teríamos um ranking com 2 vendedores ocupando a primeira posição (com 30 vendas), 1 vendedor na segunda posição (com 18 vendas) e outros 2 vendedores na terceira posição (com 12 vendas).



# Seu desafio:

# Com base no número de vendas de todos os vendedores, a exceção de Carlos, verificar que posição Carlos ocupará no ranking, em algumas simulações de valores para o seu número de vendas.



# Mantendo o exemplo anterior, para o vetor V=[30, 12, 30, 18, 12], que representa o número de vendas dos outros vendedores e o vetor C=[20, 10, 35], que representa as simulações de vendas de Carlos, o resultado das simulações é [2, 4, 1], visto que:

# Se Carlos efetuar 20 vendas, ocupará a posição 2 no ranking;

# Se Carlos efetuar 10 vendas, ocupará a posição 4;

# Se Carlos efetuar 35 vendas, ocupará a posição 1.



# Formato de Entrada (todas as linhas de entrada são dados do tipo string):

# A primeira linha contém o número de elementos do vetor V
# A segunda linha contém os elementos do vetor V separados por espaço
# A terceira linha contém o número de elementos do vetor C
# A quarta linha contém os elementos do vetor C separados por espaço.


# Formato de saída:

# Para cada valor em C, imprima o valor da posição Carlos na simulação, cada valor deve ser impresso em uma nova linha.


# Exemplo de entrada:



# Exemplo de Saída:



def processInput ( input ):
    "Aqui você deve criar seu algoritmo para processar a entrada e depois retorna-la."
    
    
    
    return input
    

#Este e um exemplo de processamento de entradas (inputs), sinta-se a vontade para altera-lo conforme necessidade da questao.
value = input()

while (value):
    print(processInput(value))
    
    try:
        value = input()
    except EOFError:
        break