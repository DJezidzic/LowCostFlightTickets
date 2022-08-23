import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowFlightOfferComponent } from './flight-offer/show-flight-offer/show-flight-offer.component';
import { FlightOfferComponent } from './flight-offer/flight-offer.component';
import { CreateFlightOfferComponent } from './flight-offer/create-flight-offer/create-flight-offer.component';
import { LowCostFlightApiService } from './low-cost-flight-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NetworkInterceptor } from './network.interceptor';

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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  providers: [LowCostFlightApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
