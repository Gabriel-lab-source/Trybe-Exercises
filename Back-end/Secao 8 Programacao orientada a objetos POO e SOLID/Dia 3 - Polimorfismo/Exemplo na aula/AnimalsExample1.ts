class Animals {
  public turns: number = 0;
  public makeSound(sound: string) {
    console.log('Som emitido:' + sound);
  }
}

class Dogs extends Animals {
  setTurns(turns: number) {
    this.turns = turns;
  }
  
  makeSound(sound: string): void {
    this.setTurns(5);
    console.log(`Som emitido: ${sound}, ${this.turns} vezes`);
  }
}

class Birds extends Animals {
  public specie: string;
  
  constructor() {
    super();
    this.specie = 'pássaro';
  }
  
  makeSound(sound: string) {
    console.log(`O som emitido pelo ${this.specie} é ${sound}`);
  }
}

const dogs = new Dogs();
dogs.makeSound("au au au");

const birds = new Birds();
birds.makeSound("fiu fiu fiu fiu fiu");