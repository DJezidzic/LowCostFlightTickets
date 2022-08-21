import { Component, Input, OnInit } from '@angular/core';
import { SearchParams, IFlightParameters } from 'src/app/models/flight-param';
import { IFlightSearchData } from 'src/app/models/flight-offer.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-show-flight-offer',
  templateUrl: './show-flight-offer.component.html',
  styleUrls: ['./show-flight-offer.component.css']
})
export class ShowFlightOfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //@Input() params:SearchParams=new SearchParams("","","","",0,false);
  @Input() params:any;
  @Input() result:IFlightSearchData[]=[];


}
