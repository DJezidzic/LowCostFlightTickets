import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowFlightOfferComponent } from './flight-offer/show-flight-offer/show-flight-offer.component';
import { FlightOfferComponent } from './flight-offer/flight-offer.component';
import { CreateFlightOfferComponent } from './flight-offer/create-flight-offer/create-flight-offer.component';
import { LowCostFlightApiService } from './low-cost-flight-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowFlightOfferComponent,
    FlightOfferComponent,
    CreateFlightOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LowCostFlightApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
