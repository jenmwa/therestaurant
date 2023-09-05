import { createContext } from "react";
import { IRestaurant } from "../models/IRestaurant";

export const RestaurantContext = createContext<IRestaurant[]>([]);
