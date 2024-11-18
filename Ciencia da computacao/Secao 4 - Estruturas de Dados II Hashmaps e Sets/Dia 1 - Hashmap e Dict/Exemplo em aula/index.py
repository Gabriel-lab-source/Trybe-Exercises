from main.exemplo_dict_words import sort_dict_by_alphabet

names = [
    "Ana", "Pedro", "Paula", "Bianca", "Bruno",
    "Carla", "Carlos", "Alice", "Amanda", "João",
    "Júlia", "Marcos", "Maria", "Marcelo", "Fernanda",
    "Fábio", "Flávia", "Renato", "Rafaela", "Gabriel",
    "Gabriela", "Luiz", "Larissa", "Leonardo", "Lucas"
]

for key, value in sort_dict_by_alphabet(names).items():
    print(f"A letra {key} contém os valores {value}")
