import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayGiftComponent } from './birthday-gift.component';

describe('BirthdayGiftComponent', () => {
  let component: BirthdayGiftComponent;
  let fixture: ComponentFixture<BirthdayGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
