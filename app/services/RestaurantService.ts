import axios from "axios";
import { ICreateRestaurant } from "../models/ICreateRestaurant";

const BASE_URL = "https://school-restaurant-api.azurewebsites.net/restaurant/";

const getRestaurant = async (id: string) => {
  const response = await axios.get(`${BASE_URL}${id}`);
  return response.data[0];
};

const postUrl = `${BASE_URL}create`;
const postData: ICreateRestaurant = {
  name: "the restaurant",
  address: {
    street: "Drottninggatan 1",
    zip: "123 45",
    city: "Stockholm",
  },
};

export const createRestaurant = async () => {
  try {
    // Add hardcoded restaurant ID to our special createRestaurant stuff.
    
    // const response = await axios.post(postUrl, postData);
    // console.log("POST Response:", response.data);

    const id = '64fad0675eecc88857a6a3a2';
    console.log(id);
    const restaurant = await getRestaurant(id);
    console.log(restaurant);
    return restaurant;
  } catch (error) {
    console.error("POST Error:", error);
  }
};
