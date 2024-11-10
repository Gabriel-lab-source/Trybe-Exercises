with open("arquivo.txt", "w") as file:
    file.write("Miguel 33\n")
    # Não precisa da quebra de linha,
    # pois esse é um comportamento padrão do print
    print("Túlio 22", file=file)
