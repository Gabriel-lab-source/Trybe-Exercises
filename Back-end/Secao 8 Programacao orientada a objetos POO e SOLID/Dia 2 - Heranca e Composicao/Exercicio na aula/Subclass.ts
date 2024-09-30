import Superclass from "./Superclass";

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (superclass: Superclass) => {
  if(superclass.isSuper) console.log('Super');
  else console.log('Sub');
}

const subcls = new Subclass();
const superCls = new Superclass();

myFunc(subcls);
myFunc(superCls)