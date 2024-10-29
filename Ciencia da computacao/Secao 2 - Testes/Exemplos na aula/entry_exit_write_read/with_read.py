# escrita
with open("arquivo.txt", "w") as file:
    file.write("Trybe is a shitstain")

# leitura
with open("arquivo.txt", "r") as file:
    content = file.read()
    print(content)
