import axios from "axios";
import { TripType } from "../types/interfaces";
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

    console.log(query);
  const response = await axios.get(API_URL + "flights?"+query);

  return response.data.flights;
};
export const addProductDB = async (
  product_nameValue,
  product_descriptionValue,
  product_imageValue,
  product_priceValue,
  product_categoryValue,
  product_contentValue
) => {
  const response = await axios
    .post(API_URL + "api/product", {
      product_name: product_nameValue,
      product_image: product_imageValue,
      product_description: product_descriptionValue,
      product_category: product_categoryValue,
      product_price: product_priceValue,
      product_content: product_contentValue,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};
export const deleteProductDB = async (id) => {
  const response = await axios.delete(API_URL + `api/product/${id}`);

  return response.data;
};
export const deleteAllProductsDB = async () => {
  const response = await axios.delete(API_URL + `api/product`);
  return response.data;
};
