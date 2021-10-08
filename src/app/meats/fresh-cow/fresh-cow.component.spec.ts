import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshCowComponent } from './fresh-cow.component';

describe('FreshCowComponent', () => {
  let component: FreshCowComponent;
  let fixture: ComponentFixture<FreshCowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshCowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshCowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
