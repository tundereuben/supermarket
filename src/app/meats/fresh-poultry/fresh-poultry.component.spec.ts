import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshPoultryComponent } from './fresh-poultry.component';

describe('FreshPoultryComponent', () => {
  let component: FreshPoultryComponent;
  let fixture: ComponentFixture<FreshPoultryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshPoultryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshPoultryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
