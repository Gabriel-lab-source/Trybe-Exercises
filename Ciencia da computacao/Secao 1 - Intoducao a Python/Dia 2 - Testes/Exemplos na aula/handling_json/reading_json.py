import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    content = file.read()  # leitura do arquivo
    pokemons = json.loads(content)["results"]
    # O conteúdo é transformado em estrutura python equivalente,
    # neste caso um dicionário.
    # Acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[0])  # imprime o primeiro pokemon da lista
