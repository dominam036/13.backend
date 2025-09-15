import { data } from "./data";
 
interface IKutya {
    id: number | null;
    nev: string;
    fajta: string;
    nem: boolean;
    eletkor: number;
    kepUrl: string | null;
}
 
 
export default class Kutya implements IKutya{
 
    constructor(kutya:IKutya){
        this.id = kutya.id || null;
        this.nev = kutya.nev;
        this.fajta = kutya.fajta;
        this.nem = kutya.nem;
        this.eletkor = kutya.eletkor;
        this.kepUrl = kutya.kepUrl || null;
    }
 
    id: number | null;
    nev: string;
    fajta: string;
    nem: boolean;
    eletkor: number;
    kepUrl: string | null;  
 
    get Id(){
        return this.id;
    }
 
    set Id(id: number | null){
        this.id = id;
    }
 
    public kutya(): IKutya {
        const kutya: IKutya = {
            id: this.id,
            nev: this.nev,
            fajta: this.fajta,
            nem: this.nem,
            eletkor: this.eletkor,
            kepUrl: this.kepUrl,
        };
        return kutya;
    }
 
    public kutyak(kutyakt: IKutya[]): IKutya[] {
        const kutyak: IKutya[] = [];
        kutyak.push(...kutyakt)
        return kutyak;
    }
 
    public tablazatGen(array: IKutya[]) {
        const table = document.createElement('table')
        document.body.appendChild(table)
        const headerRow = document.createElement('tr')
        table.appendChild(headerRow)
        for (const key in array[0]) {
            const th = document.createElement('th')
            th.innerHTML = key;
            headerRow.appendChild(th)
        }
        for (let i = 0; i < array.length; i++) {
            const row = document.createElement('tr')
            table.appendChild(row)
   
            for (const s in array[i]) {
                const td = document.createElement('td')
                td.innerHTML = array[i][s as keyof IKutya] + ""
                row.appendChild(td)
            }
        }
    }
}
export {IKutya}