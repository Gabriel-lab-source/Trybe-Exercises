class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    @property
    def cor(self):
        return self.__cor.upper()

    @property
    def velocidade(self):
        return self.__velocidade

    @property
    def velocidade_maxima(self):
        return self.__velocidade_maxima

    @property
    def corrente_atual_no_motor(self):
        return self.__corrente_atual_no_motor

    @cor.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe ventilador turquesa")

        self.__cor = nova_cor

    def esta_ligado(self):
        return self.__ligado

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade <= 0:
            raise ValueError(
                f"Velocidade deve estar entre 1 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0


ventilador = Ventilador("Rosa", 110, 127, 200)
