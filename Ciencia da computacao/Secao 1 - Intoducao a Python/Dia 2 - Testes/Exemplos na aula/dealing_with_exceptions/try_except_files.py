try:
    with open("arquivo.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    # será executado caso haja a exceção 'FileNotFoundError'
    print("Arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("Arquivo manipulado e fechado com sucesso")
finally:
    # será sempre executado, independentemente de erro
    print("Fim da tentativa de ler o arquivo")

# Como estamos abrindo o arquivo em modo de leitura,
# uma exceção será levantada caso ele não exista,
# executando as cláusulas except e finally.
# Entretanto, se alterarmos o modo para escrita,
# o arquivo será criado mesmo se inexistente,
# executando as cláusulas else e finally.
