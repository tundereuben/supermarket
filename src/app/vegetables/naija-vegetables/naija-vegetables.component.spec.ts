import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaijaVegetablesComponent } from './naija-vegetables.component';

describe('NaijaVegetablesComponent', () => {
  let component: NaijaVegetablesComponent;
  let fixture: ComponentFixture<NaijaVegetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaijaVegetablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaijaVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
