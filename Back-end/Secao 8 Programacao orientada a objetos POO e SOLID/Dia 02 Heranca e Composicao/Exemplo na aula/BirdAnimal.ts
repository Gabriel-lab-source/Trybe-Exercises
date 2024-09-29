class Animal {
  constructor(protected birthDate: Date) { }
}
class Bird extends Animal {
  constructor(public name: string) {
    super(new Date());
  }
}