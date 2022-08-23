import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchParams, IFlightParameters } from 'src/app/models/flight-param';
import { IFlightSearchData } from 'src/app/models/flight-offer.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LowCostFlightApiService } from 'src/app/low-cost-flight-api.service';


@Component({
  selector: 'app-show-flight-offer',
  templateUrl: './show-flight-offer.component.html',
  styleUrls: ['./show-flight-offer.component.css']
})
export class ShowFlightOfferComponent implements OnInit {


  ngOnInit(): void {
  }

  //@Input() params:SearchParams=new SearchParams("","","","",0,false);
  @Input() params:any;
  @Input() result:IFlightSearchData[]=[];
  @Output("onChildCallReset") onChildCallReset: EventEmitter<any> = new EventEmitter();

  
  resetSearch(){
    this.onChildCallReset.emit();
  }
  
}
