with open("arquivo.txt", "w") as file:
    LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
    file.writelines(LINES)

# A função espera que cada linha tenha seu próprio caractere de separação (\n)
