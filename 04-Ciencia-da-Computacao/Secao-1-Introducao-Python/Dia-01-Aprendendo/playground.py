#  Crie uma função que receba dois números e retorne o maior deles.


def maiorNumero(x, y):
    if x > y:
        return x
    else:
        return y


# Calcule a média aritmética dos valores contidos em uma lista.


def media(numeros):
    soma = 0
    for numero in numeros:
        soma += numero
    return soma / len(numeros)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def sequencia(n):
    count = 0
    while count < n:
        print(n * "*")
        count += 1


""" Crie uma função que receba uma lista de nomes e retorne o nome com a maior
quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia"
"Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda". """


def maiorNome(nomes):
    maiorNome = ""
    for nome in nomes:
        if len(nome) > len(maiorNome):
            maiorNome = nome
    return maiorNome


print(maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
