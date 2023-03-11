import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamirnicaTabelaComponent } from './namirnica-tabela.component';

describe('NamirnicaTabelaComponent', () => {
  let component: NamirnicaTabelaComponent;
  let fixture: ComponentFixture<NamirnicaTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamirnicaTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamirnicaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
