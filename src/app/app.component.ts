import { Component, EventEmitter, Output } from '@angular/core';
import { Namirnica } from './model/namirnica';
import { Recept } from './model/recept';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  receptZaIzmenu:Recept = {};
  namirnicaZaIzmenu:Namirnica = {};

  // index koji ce imati poziciju objekta koji se treba izmeniti
  indexZaIzmenuRecept:number | null = null;
  indexZaIzmenuNamirnica:number | null = null;
  
  obrisaneNamirnice:Namirnica[] = [];

  namirnice:Namirnica[] = [
    {
      id:1,naziv:"banana",cena:200.0
    },
    {
      id:2,naziv:"jabuka",cena:100.0
    },
  ]
  
  recepti:Recept[] = [
    {
      id:1,naziv:"Baklava",namirnica:this.namirnice[0],opis:"pravljenje baklave",slika:"/img/123"
    },
    {
      id:2,naziv:"Pizza",namirnica:this.namirnice[1],opis:"pravljenje pizze",slika:"/img/321"
    },
  ]


  // RECEPT

  kreirajRecept(recept:Recept){
    if(this.indexZaIzmenuRecept === null){
      recept.id = this.recepti.length + 1;
      this.recepti.push(recept);
    }else{
      this.recepti[this.indexZaIzmenuRecept] = {...this.receptZaIzmenu};
    }
    
  }

  izmeniRecept(event:any){
    // event sadrzi index i objekat tipa Recept na tom indexu
    this.indexZaIzmenuRecept = event.index;
    this.receptZaIzmenu = {...event.recept};
  }

  izbrisiRecept(index:number){
    this.recepti.splice(index,1);
  }

  resetujRecept(){
    this.indexZaIzmenuRecept = null;
    this.receptZaIzmenu = {};
  }



// NAMIRNICA

  kreirajNamirnicu(namirnica:Namirnica){
    if(this.indexZaIzmenuNamirnica === null){
      namirnica.id = this.namirnice.length + 1;
      this.namirnice.push(namirnica);
    }else{
      this.namirnice[this.indexZaIzmenuNamirnica] = {...this.namirnicaZaIzmenu};
    }
  }

  izmeniNamirnicu(event:any){
    this.indexZaIzmenuNamirnica = event.index;
    this.namirnicaZaIzmenu = {...event.namirnica};
  }

  ukloniNamirnicu(index:number){
    this.obrisaneNamirnice.push(this.namirnice[index]);
    this.namirnice.splice(index,1);
  }

  ukloniFizicki(index:number){
    this.obrisaneNamirnice.splice(index,1);
  }

  vratiNamirnicu(event:any){
    this.namirnice.splice(event.index,0,event.namirnica);
    this.obrisaneNamirnice.splice(event.index,1);
    
  }

  resetujNamirnicu(){
    this.indexZaIzmenuNamirnica = null;
    this.namirnicaZaIzmenu = {};
  }

}
