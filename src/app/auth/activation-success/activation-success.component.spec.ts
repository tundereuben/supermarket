import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationSuccessComponent } from './activation-success.component';

describe('ActivationSuccessComponent', () => {
  let component: ActivationSuccessComponent;
  let fixture: ComponentFixture<ActivationSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
