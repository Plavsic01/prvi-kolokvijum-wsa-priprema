import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recept } from '../model/recept';

@Component({
  selector: 'app-recept-table',
  templateUrl: './recept-table.component.html',
  styleUrls: ['./recept-table.component.css']
})
export class ReceptTableComponent {

  @Input()
  recepti:Recept[] = [];

  @Output()
  onIzmeni = new EventEmitter<any>();

  @Output()
  onUkloni = new EventEmitter<number>();


  izmeni(index:number,recept:Recept){
    this.onIzmeni.emit({index,recept});
  }

  ukloni(index:number){
    this.onUkloni.emit(index);
  }

}
