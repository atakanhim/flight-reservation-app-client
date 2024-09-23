export interface FlightData {

    lastUpdatedAt: string;
    actualLandingTime: string;
    aircraftType: {
      iataMain: string;
      iataSub: string;
    };
    baggageClaim: {
      belts: string[];
    };
    estimatedLandingTime?: string;
    expectedTimeOnBelt: string;
    flightDirection: string;
    flightName: string;
    flightNumber: number;
    id: string;
    _id?: string;
    isOperationalFlight: boolean;
    mainFlight: string;
    prefixIATA: string;
    prefixICAO: string;
    airlineCode: number;
    publicFlightState: {
      flightStates: string[];
    };
    route: {
      destinations: string[];
      eu: string;
      visa: boolean;
    };
    scheduleDateTime: string;
    scheduleDate: string;
    scheduleTime: string;
    serviceType: string;
    terminal: number;
    schemaVersion: string;
  }