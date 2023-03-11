import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceptTableComponent } from './recept-table/recept-table.component';
import { ReceptFormComponent } from './recept-form/recept-form.component';
import { FormsModule } from '@angular/forms';
import { NamirnicaTabelaComponent } from './namirnica-tabela/namirnica-tabela.component';
import { NamirnicaFormaComponent } from './namirnica-forma/namirnica-forma.component';
import { ObrisaneNamirniceTabelaComponent } from './obrisane-namirnice-tabela/obrisane-namirnice-tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptTableComponent,
    ReceptFormComponent,
    NamirnicaTabelaComponent,
    NamirnicaFormaComponent,
    ObrisaneNamirniceTabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
