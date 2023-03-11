import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Namirnica } from '../model/namirnica';

@Component({
  selector: 'app-namirnica-forma',
  templateUrl: './namirnica-forma.component.html',
  styleUrls: ['./namirnica-forma.component.css']
})
export class NamirnicaFormaComponent {

  @Input()
  namirnica:Namirnica = {};

  @Input()
  rezim:string | null = "dodavanje";

  @Output()
  onDodaj = new EventEmitter<Namirnica>();

  @Output()
  onReset = new EventEmitter<any>();

  dodajNamirnicu(){
    this.onDodaj.emit({...this.namirnica});
  }

  reset(){
    this.onReset.emit();
  }

}
