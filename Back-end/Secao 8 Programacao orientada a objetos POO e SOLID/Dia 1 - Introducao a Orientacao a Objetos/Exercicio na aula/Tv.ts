class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(bd: string, sz: number, res: string, connec: string[]) {
    console.log(`Creating Tv ${bd}`);
    this._brand = bd;
    this._size = sz;
    this._resolution = res;
    this._connections = connec;
  }

  turnOn():void {
    console.log(`Turning ${this._brand} on, ${this._size}, ${this._resolution}, \n\ connected to ${this._connections}`);
  }
  get connectedTo():string | undefined {
    return this._connectedTo;
  }
  
  set connectedTo(connect: string | undefined) {
    if (!connect || this._connections.includes(connect)) 
      { this._connectedTo = connect }
    else { console.log('Sorry, connection unavailable!');}
  }
}

const tv1 = new Tv('Sansung', 21.5, '1920x1080p', ['Xbox One', 'Spotify', 'Netflix']);

tv1.turnOn()

tv1.connectedTo = 'Netflix';

console.log(tv1.connectedTo);