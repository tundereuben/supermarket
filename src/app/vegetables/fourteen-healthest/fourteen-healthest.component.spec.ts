import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourteenHealthestComponent } from './fourteen-healthest.component';

describe('FourteenHealthestComponent', () => {
  let component: FourteenHealthestComponent;
  let fixture: ComponentFixture<FourteenHealthestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourteenHealthestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourteenHealthestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
