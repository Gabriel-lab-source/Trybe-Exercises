import sys
sys.path.append(".")

from classe_pessoa import Pessoa
from classe_ventilador import Ventilador

fulano = Pessoa('Fulano', 500)
ventilador = Ventilador('Vermelho', 160, 127, 140)
fulano.comprar_liquidificador(ventilador)
print(fulano.saldo_na_conta)