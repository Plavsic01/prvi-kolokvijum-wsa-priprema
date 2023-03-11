import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Namirnica } from '../model/namirnica';
import { Recept } from '../model/recept';

@Component({
  selector: 'app-namirnica-tabela',
  templateUrl: './namirnica-tabela.component.html',
  styleUrls: ['./namirnica-tabela.component.css']
})
export class NamirnicaTabelaComponent {

  @Input()
  namirnice:Namirnica[] = [];

  @Output()
  onIzmeni = new EventEmitter<any>();

  @Output()
  onUkloni = new EventEmitter<number>();


  izmeni(index:number,namirnica:Namirnica){
    this.onIzmeni.emit({index,namirnica});
  }

  ukloni(index:number){
    this.onUkloni.emit(index);
  }


}
