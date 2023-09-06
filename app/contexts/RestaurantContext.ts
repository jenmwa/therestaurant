import { createContext } from "react";
import { IRestaurant } from "../models/IRestaurant";

export const RestaurantContext = createContext<IRestaurant>({
  _id: '',
  name: '',
  address: '',
  zip: '',
  city: '',
});
