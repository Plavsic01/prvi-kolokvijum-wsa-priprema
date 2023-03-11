import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Namirnica } from '../model/namirnica';
import { Recept } from '../model/recept';


@Component({
  selector: 'app-recept-form',
  templateUrl: './recept-form.component.html',
  styleUrls: ['./recept-form.component.css']
})
export class ReceptFormComponent {

  @Input()
  namirnice:Namirnica[] = [];

  // ako je indexZaIzmenu != null onda je rezim izmena, u suprotnom je dodavanje
  @Input()
  rezim:string="dodavanje";

  @Input()
  recept:Recept = {};

  @Output()
  onDodaj = new EventEmitter<Recept>();

  @Output()
  onReset = new EventEmitter<any>();

  reset(){
    this.onReset.emit();
  }

  dodajRecept(){
    this.onDodaj.emit({...this.recept});
  }

  compareFn(r1:Recept,r2:Recept){
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }

}
