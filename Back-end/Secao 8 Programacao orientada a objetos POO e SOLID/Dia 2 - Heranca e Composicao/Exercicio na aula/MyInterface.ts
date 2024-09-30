interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {
    this.myNumber = myNumber;
  }
  myFunc(myParam: number): string {
    return (this.myNumber + myParam).toString()
  }
}

const minhaClasse1 = new MyClass(8);
console.log(minhaClasse1.myFunc(4));