import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrisaneNamirniceTabelaComponent } from './obrisane-namirnice-tabela.component';

describe('ObrisaneNamirniceTabelaComponent', () => {
  let component: ObrisaneNamirniceTabelaComponent;
  let fixture: ComponentFixture<ObrisaneNamirniceTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObrisaneNamirniceTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObrisaneNamirniceTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
