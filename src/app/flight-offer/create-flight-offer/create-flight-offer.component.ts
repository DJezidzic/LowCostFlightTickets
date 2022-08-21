import { Component, OnInit } from '@angular/core';
import { FlightOfferComponent } from '../flight-offer.component';
import { ShowFlightOfferComponent } from '../show-flight-offer/show-flight-offer.component';
import { IFlightOffer } from 'src/app/models/flight-offer.model';
import { ILocation } from 'src/app/models/location.model';
import { ILocationData } from 'src/app/models/location.model';
import { Observable, of } from 'rxjs';
import { LowCostFlightApiService } from 'src/app/low-cost-flight-api.service';

@Component({
  selector: 'app-create-flight-offer',
  templateUrl: './create-flight-offer.component.html',
  styleUrls: ['./create-flight-offer.component.css']
})
export class CreateFlightOfferComponent implements OnInit {

  fromLocationTemplate: boolean = true;
  toLocationTemplate: boolean = false;
  from: any=""
  to: string = ""
  origin: any
  locationList: ILocationData[]=[];
  toLocationList: ILocationData[]=[];
  destination:any
  departureDateTemplate:boolean = false;

  constructor(private service: LowCostFlightApiService) { }

  ngOnInit(): void {
  }

  handleFromLocation(){
    if(this.from.length > 2 ){
      this.service.getLocationList(this.from).subscribe(res=> {
        this.locationList = res.data;
      });
    }
  }

  handleOrigin(location:any){
    this.origin = location;
    this.fromLocationTemplate = false;
    this.toLocationTemplate = true;
    this.locationList= [];
  }

  handleToLocation(){
    if(this.to.length > 2){
      this.service.getLocationList(this.to).subscribe(res=> {
        this.toLocationList = res.data;
      });
    }
  }
  handleDestination(location:any){
    this.destination = location;
    this.toLocationTemplate = false;
    this.toLocationList = [];
    this.departureDateTemplate = true;
  }

  // Od tud zovemo obje service metode te se na njih pretplačujemo

}
