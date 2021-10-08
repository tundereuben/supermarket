import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SausageAndHotDogComponent } from './sausage-and-hot-dog.component';

describe('SausageAndHotDogComponent', () => {
  let component: SausageAndHotDogComponent;
  let fixture: ComponentFixture<SausageAndHotDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SausageAndHotDogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SausageAndHotDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
