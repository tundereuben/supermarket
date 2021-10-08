import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwambeSouvenirComponent } from './owambe-souvenir.component';

describe('OwambeSouvenirComponent', () => {
  let component: OwambeSouvenirComponent;
  let fixture: ComponentFixture<OwambeSouvenirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwambeSouvenirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwambeSouvenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
