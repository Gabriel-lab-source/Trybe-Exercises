double_dict = {i: i*2 for i in range(0, 21)}
# print(double_dict)

# Para cada char na string:
# 	- Se o char não estiver no dicionário, inclua com o valor 1;

# 	- Se estiver, incremente o valor.


# Exemplo:

str = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

str = "coxinha"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# Explicação: Nenhuma letra repete em coxinha :)

input_str = "Socorram-me, subi no ônibus em Marrocos"

str_dict = {}
for letter in input_str:
    if letter in str_dict:
        str_dict[letter] += 1
    else:
        str_dict.update({letter: 1})
print(str_dict)
