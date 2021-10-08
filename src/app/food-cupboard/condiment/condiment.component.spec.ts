import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondimentComponent } from './condiment.component';

describe('CondimentComponent', () => {
  let component: CondimentComponent;
  let fixture: ComponentFixture<CondimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
