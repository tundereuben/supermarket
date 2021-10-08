import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSouvenirComponent } from './professional-souvenir.component';

describe('ProfessionalSouvenirComponent', () => {
  let component: ProfessionalSouvenirComponent;
  let fixture: ComponentFixture<ProfessionalSouvenirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalSouvenirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalSouvenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
