export interface IKutya {
    id:number | null;
    nev:string;
    fajta:string;
    nem:boolean;
    eletkor:number;
    kepUrl:string | null;
}

export default class Kutya {
    private id:number | null;
    private nev:string;
    private fajta:string;
    private nem:boolean;
    private eletkor:number;
    private kepUrl:string | null;

    constructor(ikutya:IKutya) {
        this.id = ikutya.id || null;
        this.nev = ikutya.nev;
        this.fajta = ikutya.fajta;
        this.nem = ikutya.nem;
        this.eletkor = ikutya.eletkor;
        this.kepUrl = ikutya.kepUrl || null;
    }

    getId():number | null {
        return this.id;
    }

    setId(id:number):void {
        this.id = id;
    }

    public kutya(): IKutya {
        const kutya:IKutya = {
            id: this.id,
            nev: this.nev,
            fajta: this.fajta,
            nem: this.nem,
            eletkor: this.eletkor,
            kepUrl: this.kepUrl
        }
        return kutya;
    }
}