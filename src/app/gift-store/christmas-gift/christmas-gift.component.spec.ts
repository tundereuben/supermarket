import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasGiftComponent } from './christmas-gift.component';

describe('ChristmasGiftComponent', () => {
  let component: ChristmasGiftComponent;
  let fixture: ComponentFixture<ChristmasGiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristmasGiftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
