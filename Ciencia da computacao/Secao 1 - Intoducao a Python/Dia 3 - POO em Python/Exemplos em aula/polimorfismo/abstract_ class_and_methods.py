from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")


def minha_func(database):  # repare que o d é minúsculo
    if isinstance(database, Database):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")


def minha_func2(database: Database):
    database.execute("query qualquer")


mongo = MongoDatabase()
sql = MySQLDatabase()

mongo.execute('faz nada aqui')
sql.execute('tambem, faz nada')

minha_func(mongo)
minha_func(sql)
minha_func("db_inválido")

minha_func2(mongo)
minha_func2(sql)
minha_func2("db_inválido")
