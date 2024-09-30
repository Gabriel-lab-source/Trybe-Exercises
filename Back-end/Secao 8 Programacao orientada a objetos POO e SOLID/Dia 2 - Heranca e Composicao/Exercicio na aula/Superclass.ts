export default class Superclass {
  constructor(public isSuper: boolean = true) {
    this.isSuper = isSuper;
  }
  public sayHello():void {
    console.log('Olá mundo');
  }
}