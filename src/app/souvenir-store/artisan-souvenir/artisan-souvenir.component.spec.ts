import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanSouvenirComponent } from './artisan-souvenir.component';

describe('ArtisanSouvenirComponent', () => {
  let component: ArtisanSouvenirComponent;
  let fixture: ComponentFixture<ArtisanSouvenirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisanSouvenirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtisanSouvenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
