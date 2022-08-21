import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFlightOfferComponent } from './create-flight-offer.component';

describe('CreateFlightOfferComponent', () => {
  let component: CreateFlightOfferComponent;
  let fixture: ComponentFixture<CreateFlightOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFlightOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFlightOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
