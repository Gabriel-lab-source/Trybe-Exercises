class ListaArray:
    def __init__(self, data):
        self.value = data

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.value)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.value)

    def get(self, index):
        # recupera o elemento no índice informado
        return self.value[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.value.insert(index, value)

    def update(self, index, value_to_update):
        self.value[index] = value_to_update


exemplo = ListaArray([1, 2, 3, 4, 5])
exemplo.update(2, 10)
print(exemplo.value)  # [1, 2, 10, 4, 5]
