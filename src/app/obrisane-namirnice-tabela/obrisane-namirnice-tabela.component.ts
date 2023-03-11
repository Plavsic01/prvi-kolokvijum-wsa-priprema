import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Namirnica } from '../model/namirnica';

@Component({
  selector: 'app-obrisane-namirnice-tabela',
  templateUrl: './obrisane-namirnice-tabela.component.html',
  styleUrls: ['./obrisane-namirnice-tabela.component.css']
})
export class ObrisaneNamirniceTabelaComponent {

  @Input()
  obrisaneNamirnice:Namirnica[] = [];

  @Output()
  onFizickoUklanjanje = new EventEmitter<number>();

  @Output()
  onVrati = new EventEmitter<any>();

  ukloniFizicki(index:number){
    this.onFizickoUklanjanje.emit(index);
  }

  vratiUNeobrisano(index:number,namirnica:Namirnica){
    this.onVrati.emit({index,namirnica});
  }
}
