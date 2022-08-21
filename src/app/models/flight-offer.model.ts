export interface IFlightOffer {
  data: IFlightSearchData[];
}

export interface IFlightSearchData {
    type: string;
    id: string;
    source: string;
    price: IPrice;
    itineraries: IItinerary[];
    travelerPricings: ITravelerPricing[];
}

export interface IDeparture {
    iataCode: string;
    zerminal: string;
    at: string;
}

export interface IPrice {
    currency: string;
    total: string;
    grandTotal: string;
}

export interface ISegment {
    departure: IDeparture;
    carrierCode: string;
    number: string;
    numberOfStops: number;
}

export interface IItinerary {
    duration: string;
    segments: ISegment[];
}

export interface IFareDetailsBySegment {
    cabin: string;
}

export interface ITravelerPricing {
    fareOption: string;
    fareDetailsBySegment: IFareDetailsBySegment[];
}
