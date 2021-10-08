import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenPartySouvenirComponent } from './children-party-souvenir.component';

describe('ChildrenPartySouvenirComponent', () => {
  let component: ChildrenPartySouvenirComponent;
  let fixture: ComponentFixture<ChildrenPartySouvenirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenPartySouvenirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenPartySouvenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
