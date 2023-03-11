import { Namirnica } from "./namirnica";

export interface Recept {
    id?:number;
    naziv?:string;
    namirnica?:Namirnica;
    opis?:string; 
    slika?:string;
}
