import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamirnicaFormaComponent } from './namirnica-forma.component';

describe('NamirnicaFormaComponent', () => {
  let component: NamirnicaFormaComponent;
  let fixture: ComponentFixture<NamirnicaFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamirnicaFormaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamirnicaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
