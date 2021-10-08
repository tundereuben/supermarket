import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladDressingComponent } from './salad-dressing.component';

describe('SaladDressingComponent', () => {
  let component: SaladDressingComponent;
  let fixture: ComponentFixture<SaladDressingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladDressingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladDressingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
