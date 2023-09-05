import { IRestaurant } from "../models/IRestaurant";

export interface IAction {
  type: string;
  payload: string;
}

export const RestaurantReducer = (
  restaurant: IRestaurant,
  action: IAction
): IRestaurant => {
  return restaurant;
};
