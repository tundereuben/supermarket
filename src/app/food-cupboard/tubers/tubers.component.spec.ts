import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TubersComponent } from './tubers.component';

describe('TubersComponent', () => {
  let component: TubersComponent;
  let fixture: ComponentFixture<TubersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TubersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TubersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
