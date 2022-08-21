export interface IAddress {
  cityName: string;
}

export interface ILocationData {
  name: string;
  iataCode: string;
  address: IAddress;
}

export interface ILocation {
  data: ILocationData[];
}
