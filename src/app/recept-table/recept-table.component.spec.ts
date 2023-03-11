import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptTableComponent } from './recept-table.component';

describe('ReceptTableComponent', () => {
  let component: ReceptTableComponent;
  let fixture: ComponentFixture<ReceptTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
