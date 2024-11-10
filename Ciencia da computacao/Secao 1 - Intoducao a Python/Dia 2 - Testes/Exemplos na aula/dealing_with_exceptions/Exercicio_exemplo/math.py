# Função para somar dois números
def add(x, y):
    return x + y


list1 = [1, 2, 3]


list2 = [4, 5, 6]
summed = map(add, list1, list2)

# Converte o resultado em uma lista
result = list(summed)
print(result)  # Saída: [5, 7, 9]
