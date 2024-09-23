import axios from "axios";
import { TripType } from "../types/interfaces";
import { FlightData } from "../types/flight";
// categories

const API_URL = "http://localhost:3000/"
console.log(API_URL);

export const getFlightsFromDB = async (flightDate?:Date,arrival?:string,departure?:string,returnDate?,tripType?:TripType) => {
    let query = "";
    if (flightDate)
            query+="flightDate="+flightDate+"&";
    if (arrival)
            query+="arrival="+arrival+"&";
    if (departure)
            query+="departure="+departure+"&";
    if (returnDate)
            query+="returnDate="+returnDate+"&";
    if (tripType)
            query+="tripType="+tripType+"&";

  const response = await axios.get(API_URL + "flights?"+query);

  return response.data.flights;
};
export const getFlightWithIdFromDB = async (id:string) => {
  const response = await axios.get(API_URL + "flights?id="+id);
  return response.data.flights;
};
export const getFlightReservationsFromDB = async () => {
  const response = await axios.get(API_URL + "flight-reservation");
  return response.data;
};
export const addFlightReservationDB = async (flight:FlightData) => {
  
  // flight objesindeki boş değerleri (null, undefined, "") kaldırıyoruz
  for (const key in flight) {
    if (
      flight[key] === undefined ||
      flight[key] === null ||
      (typeof flight[key] === "string" && flight[key].trim() === "")
    ) {
      delete flight[key]; // Eğer değer boşsa, bu alanı flight objesinden siliyoruz
    }
  }
  try {
    const response = await axios.post(
      API_URL + "flight-reservation",
      flight
    );
    console.log("Flight reservation added:", response.data);
    return response.data; // Yanıt verisini döndürüyoruz
  } catch (error) {
    throw error; // Hatanın yukarıya doğru yayılmasını sağlamak için hata fırlatıyoruz
  }
};

export const deleteFlightReservationFromDB = async (id:string) => {
  const response = await axios.delete(API_URL + `flight-reservation/${id}`);
  return response.data;
};
export const deleteAllProductsDB = async () => {
  const response = await axios.delete(API_URL + `api/product`);
  return response.data;
};
