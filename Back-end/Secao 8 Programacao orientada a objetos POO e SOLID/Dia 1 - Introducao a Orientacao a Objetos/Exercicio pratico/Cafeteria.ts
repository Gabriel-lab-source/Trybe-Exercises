class CafeteriaClient {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

class CafeteriaOrder {
  private _orderName: string;
  private _price: number;

  constructor(orderName: string, price: number) {
    this._orderName = orderName;
    this._price = price;
  }
  get price(): number {
    return this._price;
  }
}

class ClientOrder {
  private _client: CafeteriaClient;
  private _itens: CafeteriaOrder[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(client: CafeteriaClient, itens: CafeteriaOrder[], paymentMethod: string, discount: number) {
    this._client = client;
    this._itens = itens;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }
  calculateTotalOrder() {
    const itensTotalCost = this._itens.reduce((previousItemValue, currItem: CafeteriaOrder) => previousItemValue + currItem.price, 0);
    return itensTotalCost;
  }
}

const client = new CafeteriaClient('João');

const sandwich = new CafeteriaOrder('Sanduíche Natural', 5.00);
const juice = new CafeteriaOrder('Suco de Abacaxi', 5.00);
const dessert = new CafeteriaOrder('Gelatina de Uva', 2.50);

const order = new ClientOrder(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotalOrder());
