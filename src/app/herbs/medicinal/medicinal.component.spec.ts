import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinalComponent } from './medicinal.component';

describe('MedicinalComponent', () => {
  let component: MedicinalComponent;
  let fixture: ComponentFixture<MedicinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
