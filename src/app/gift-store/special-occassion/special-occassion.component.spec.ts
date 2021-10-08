import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOccassionComponent } from './special-occassion.component';

describe('SpecialOccassionComponent', () => {
  let component: SpecialOccassionComponent;
  let fixture: ComponentFixture<SpecialOccassionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialOccassionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOccassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
