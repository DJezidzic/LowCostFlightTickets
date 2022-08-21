import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { ILocation } from './models/location.model';
import { environment } from 'src/environments/environment';
import { IFlightOffer } from './models/flight-offer.model';
import { SearchParams } from './models/flight-param';

@Injectable({
  providedIn: 'root'
})
export class LowCostFlightApiService {

  private lowcostflightApiUrl = environment.lowCostApiUrl;

  constructor(private http:HttpClient) { }

  getLocationList(keyword:string):Observable<ILocation>{
    return this.http.get<ILocation>(this.lowcostflightApiUrl + `/Location/${keyword}`);
  }

  getFlightOffer(data:SearchParams):Observable<IFlightOffer>{
    return this.http.post<IFlightOffer>(this.lowcostflightApiUrl + '/Flight',data);
  }
   // Najbolje koristit post, gdje kad napravimo subscribe u create-flight komponenti obradimo response po
    // modelu koji kreiramo unutar /models

}
