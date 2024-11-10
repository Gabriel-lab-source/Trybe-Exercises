class A:
    def faz_algo(self, valor):
        print(self)
        print(valor)


class B(A):
    def faz_outra_coisa(self):
        print("Vou printar o valor pelo método criado em A")
        # Chama o método da classe A, que neste caso é a superclasse, passando
        # o `self` explicitamente
        A.faz_algo(self, valor=1)


b = B()
b.faz_outra_coisa()
A.faz_algo(b, 'nada')
# Vou printar o valor pelo método criado em A
# 1
