class Exemplo:
    def __init__(self):
        print("Inicializando Exemplo")

    def __new__(cls, *args, **kwargs):
        print("Criando uma nova instância de Exemplo")
        instance = super().__new__(cls)
        return instance
