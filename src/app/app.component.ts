import { Component } from '@angular/core';
import { LowCostFlightApiService } from './low-cost-flight-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LowCostFlightTickets';
  loading$ = this.loader.loading$;
  constructor(public loader: LowCostFlightApiService){}
  
}
