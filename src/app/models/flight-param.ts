export interface IFlightParameters{
    location:string;
    destination:string;
    departureDate:string;
    returnDate:string;
    adults:number;
    nonStop:boolean;
}

export class SearchParams implements IFlightParameters{
    constructor(public location:string, public destination:string, public departureDate:string,
      public returnDate:string, public adults:number, public nonStop:boolean){
        this.location = location;
        this.destination = destination;
        this.departureDate = departureDate;
        this.returnDate = returnDate;
        this.adults = adults;
        this.nonStop = nonStop;
      }
}