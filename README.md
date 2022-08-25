# LowCostFlightTickets

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

Main objective was to create Angular app, which needed to get data (Flight offers) from our own API.
Our API gathered data from AmadeusAPI (https://developers.amadeus.com/).

The first two parameters we had to provide were Origin Location and destination. The input compornents for those two locations needed to provide autocomplete feature, so when we wrote the name of the airport or the city we should have got a result without hitting enter button. The next two parameters and inputs for them were departure and return date, which had to be sent to amadeus api in this format: "yyyy-mm-dd". The last two parameters needed to be number of adults and non stop option.

Search result are flight offers, which we needed to show in a table as Origin and destination location, departure and return date, number of adults, number of stops, total price and currency in which we should be paing flight ticket/s. 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
