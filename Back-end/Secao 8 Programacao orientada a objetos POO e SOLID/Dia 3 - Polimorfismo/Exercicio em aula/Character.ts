abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
  static presentingCharacter(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
  talk(): void {
    console.log(`${this._name} falando, eu ataco de perto`);
  }
  specialMove(): void {
    console.log(`${this._name} usou ${this._specialMoveName}`);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
  talk(): void {
    console.log(`${this._name} falando, eu ataco de longe`);
  }
  specialMove(): void {
    console.log(`${this._name} usou ${this._specialMoveName}`);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

Character.presentingCharacter(yoshi);
Character.presentingCharacter(samus);