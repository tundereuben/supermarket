import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshGoatComponent } from './fresh-goat.component';

describe('FreshGoatComponent', () => {
  let component: FreshGoatComponent;
  let fixture: ComponentFixture<FreshGoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshGoatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshGoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
