import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFlightOfferComponent } from './show-flight-offer.component';

describe('ShowFlightOfferComponent', () => {
  let component: ShowFlightOfferComponent;
  let fixture: ComponentFixture<ShowFlightOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFlightOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFlightOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
