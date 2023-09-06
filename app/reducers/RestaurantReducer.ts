import { IRestaurant } from "../models/IRestaurant";

export interface IAction {
  type: string;
  payload: IRestaurant;
}

export const RestaurantReducer = (restaurant: IRestaurant, action: IAction): IRestaurant => {
  if (action.type === 'SET_RESTAURANT') {
    return action.payload;
  }
  return restaurant;
};
