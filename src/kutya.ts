import { data } from "./data";

export interface IKutya {
    id : number | null;
    nev : string;
    fajta : string;
    nem: boolean;
    eletkor: number;
    kepUrl: string | null; 
}

class Valami{
    readonly name! : string;
    x : number;
    y : number;
    constructor(x = 0, y = 0){
        this.name = "Valami";
        this.x = x;
        this.y = y;
    }
}

const valami = new Valami(10, 10);
console.log(valami.x);

export default class Kutya implements IKutya{
    // private id : number | null;
    // private nev : string;
    // private fajta : string;
    // private nem: boolean;
    // private eletkor: number;
    // private kepUrl: string | null; 
    id : number | null;
    nev : string;
    fajta : string;
    nem: boolean;
    eletkor: number;
    kepUrl: string | null;

    constructor(dog: IKutya) {
    this.id = dog.id || null;
    this.nev = dog.nev;
    this.fajta = dog.fajta;
    this.nem = dog.nem;
    this.eletkor = dog.eletkor;
    this.kepUrl = dog.kepUrl || null;
  }
   get Id() {
    return this.id;
  }
  set Id(id: number | null) {
    this.id = id;
  }
  public dog(): IKutya {
    const dog: IKutya = {
      id: this.id,
      nev: this.nev,
      fajta: this.fajta,
      nem: this.nem,
      eletkor: this.eletkor,
      kepUrl: this.kepUrl,
    };
    return dog;
  }
  public dogs(kutyak:IKutya[]): IKutya[] {
    const dogs: IKutya[]=[]; 
    dogs.push(...kutyak)
    return dogs;
  }
}