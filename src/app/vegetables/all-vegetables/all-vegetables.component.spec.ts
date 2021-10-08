import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVegetablesComponent } from './all-vegetables.component';

describe('AllVegetablesComponent', () => {
  let component: AllVegetablesComponent;
  let fixture: ComponentFixture<AllVegetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVegetablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
